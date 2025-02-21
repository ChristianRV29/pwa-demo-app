import { useState } from 'react'

import {
	type DialogProps,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
	Typography,
} from '@mui/material'

interface DialogTodoProps extends DialogProps {
	onClose: () => void
	onAdd: (title: string) => void
}

export const DialogTodo = ({ onAdd, onClose, ...props }: DialogTodoProps) => {
	const [title, setTitle] = useState<string>('')

	return (
		<Dialog {...props}>
			<DialogTitle>
				<Typography component="h5" variant="h5">
					Add new todo
				</Typography>
				<DialogContent>
					<TextField
						variant="outlined"
						label={'What do you want to do?'}
						onChange={e => {
							setTitle(e.target.value)
						}}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={onClose} sx={{ backgroundColor: 'secondary.light' }}>
						Cancel
					</Button>
					<Button
						disabled={!title.length}
						onClick={() => onAdd(title)}
						sx={{
							backgroundColor: 'success.dark',
							color: 'text.secondary',
						}}>
						Add
					</Button>
				</DialogActions>
			</DialogTitle>
		</Dialog>
	)
}
