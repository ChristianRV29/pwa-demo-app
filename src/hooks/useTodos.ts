import { useMemo, useState } from 'react'

import { Filter, Todo } from '@types'

export const useTodos = () => {
	const [todos, setTodos] = useState<Todo[]>([])
	const [currentFilter, setCurrentFilter] = useState<Filter>('all')
	const [searchTerm, setSearchTerm] = useState<string>('')

	const [dialogVisible, setDialogVisible] = useState<boolean>(false)

	const filteredTodos = useMemo(() => {
		if (!todos.length) return []

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

	const createNewTodo = (title: string) => {
		setCurrentFilter('all')

		const newTodo: Todo = {
			id: todos.length + 1,
			userId: 1,
			completed: false,
			title,
		}

		setTodos([...todos, newTodo])
		setDialogVisible(false)
	}

	const toggleCompleted = (id: number, completed: boolean) => {
		const newTodos = todos.map(todo => {
			if (todo.id === id) {
				return { ...todo, completed }
			}

			return todo
		})

		setTodos(newTodos)
	}

	return {
		createNewTodo,
		currentFilter,
		dialogVisible,
		searchTerm,
		setCurrentFilter,
		setDialogVisible,
		setSearchTerm,
		todos: filteredTodos,
		toggleCompleted,
	}
}
