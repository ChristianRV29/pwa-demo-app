import { useCallback, useEffect, useMemo, useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { Filter, Todo } from '@types'
import { getTodos } from '@utils'

export const useTodos = () => {
	const {
		data,
		isLoading: isLoadingTodos,
		error: todoError,
	} = useQuery({
		queryKey: ['todos'],

		queryFn: async () => {
			const todos = await getTodos(5)

			if (!todos) throw new Error('Failed to fetch todos')

			return todos
		},
		retry: 0,
		refetchOnWindowFocus: false,
		staleTime: 1000 * 60 * 5, // 5 minutes
	})

	const [todos, setTodos] = useState<Todo[]>([])
	const [currentFilter, setCurrentFilter] = useState<Filter>('all')
	const [searchTerm, setSearchTerm] = useState<string>('')

	const [dialogVisible, setDialogVisible] = useState<boolean>(false)

	useEffect(() => {
		if (!data) return

		setTodos(data)
	}, [data])

	const filteredTodos = useMemo(() => {
		if (!todos || !todos.length) return []

		return todos
			.filter(todo => {
				if (currentFilter === 'all') return true
				if (currentFilter === 'completed') return todo.completed
				if (currentFilter === 'pending') return !todo.completed
			})
			.filter(todo => {
				if (!searchTerm.length) return true
				return todo.title.toLowerCase().includes(searchTerm.toLowerCase())
			})
	}, [todos, currentFilter, searchTerm])

	const createNewTodo = useCallback(
		(title: string) => {
			setCurrentFilter('all')
			const newTodo: Todo = {
				id: todos.length + 1,
				userId: 1,
				completed: false,
				title,
			}
			setTodos([newTodo, ...todos])
			setDialogVisible(false)
		},
		[todos],
	)

	const toggleCompleted = useCallback(
		(id: number, completed: boolean) => {
			if (!todos || !todos.length) return

			const newTodos = todos.map(todo => {
				if (todo.id === id) {
					return { ...todo, completed }
				}

				return todo
			})

			setTodos(newTodos)
		},
		[todos],
	)

	return {
		createNewTodo,
		currentFilter,
		dialogVisible,
		isLoadingTodos,
		searchTerm,
		setCurrentFilter,
		setDialogVisible,
		setSearchTerm,
		todoError,
		todos: filteredTodos,
		toggleCompleted,
	}
}
