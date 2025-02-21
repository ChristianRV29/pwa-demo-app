export type Todo = {
	id: number
	userId: number
	completed: boolean
	title: string
}

export type Filter = 'all' | 'completed' | 'pending'
