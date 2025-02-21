import { Typography } from '@mui/material'

import { TodoItem } from '@components'
import { Todo } from '@types'

import { StyledBox } from './TodoList.styles'

interface TodoListProps {
	todos: Todo[]
	onCompleted: (id: number, completed: boolean) => void
}

export const TodoList = ({ todos, onCompleted }: TodoListProps) => {
	return (
		<StyledBox sx={{ flexGrow: 1 }}>
			{!todos.length ? (
				<Typography>There are no todos for now, create a new one</Typography>
			) : (
				<>
					{todos.map((todo, idx) => (
						<TodoItem
							key={`todo-item-${idx}`}
							item={todo}
							onCompleted={onCompleted}
						/>
					))}
				</>
			)}
		</StyledBox>
	)
}
