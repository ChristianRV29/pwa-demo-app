import { useMemo, useState } from 'react'

import { Filter, Todo } from '@types'

const HARD_CODED_TODOS: Todo[] = [
	{
		id: 1,
		userId: 1,
		completed: false,
		title: 'Learn TypeScript',
	},
	{
		id: 2,
		userId: 1,
		completed: true,
		title: 'Learn React',
	},
	{
		id: 3,
		userId: 1,
		completed: false,
		title: 'Learn Next.js',
	},
]

export const useTodos = () => {
	const [todos, setTodos] = useState<Todo[]>(HARD_CODED_TODOS)
	const [currentFilter, setCurrentFilter] = useState<Filter>('all')
	const [searchTerm, setSearchTerm] = useState<string>('')

	const filteredTodos = useMemo(() => {
		if (!HARD_CODED_TODOS.length) return []

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
		currentFilter,
		searchTerm,
		setCurrentFilter,
		setSearchTerm,
		todos: filteredTodos,
		toggleCompleted,
	}
}
