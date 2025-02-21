import { Box, styled } from '@mui/material'

export const StyledBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(2),
	padding: theme.spacing(2),
}))
