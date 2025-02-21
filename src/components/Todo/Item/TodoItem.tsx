import { ChangeEvent } from 'react'
import { Typography } from '@mui/material'

import { StyledCheckBox, StyledListItem } from './TodoItem.styles'
import { Todo } from '@types'

interface TodoItemProps {
	item: Todo
	onCompleted: (id: number, completed: boolean) => void
}

export const TodoItem = ({
	item: { id, title, completed },
	onCompleted,
}: TodoItemProps) => {
	const toggleCompleted = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()

		const newValue = e.target.checked
		onCompleted(id, newValue)
	}

	return (
		<StyledListItem>
			<Typography variant="body1" component={'span'}>
				{title}
			</Typography>
			<StyledCheckBox
				aria-checked={completed}
				checked={completed}
				onChange={toggleCompleted}
			/>
		</StyledListItem>
	)
}
