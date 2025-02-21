import { Fab, styled } from '@mui/material'

export const StyledFAB = styled(Fab)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	bottom: theme.spacing(2),
	color: theme.palette.text.secondary,
	position: 'fixed',
	right: theme.spacing(2),
}))
