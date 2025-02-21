import { Todo } from '@types'
import { JSON_PLACEHOLDER_BASE_URL } from '@constants'

export const getTodos = (limit: number = 10) =>
	new Promise<Array<Todo>>((resolve, reject) => {
		fetch(`${JSON_PLACEHOLDER_BASE_URL}/todos?_limit=${limit}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(response => response.json())
			.then(data => resolve(data))
			.catch(() => reject('Failed to fetch todos'))
	})
