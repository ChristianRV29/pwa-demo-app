import { Chip, styled } from '@mui/material'

import { CustomChipProps } from './Chip'

export const StyledChip = styled(Chip, {
	shouldForwardProp: prop => prop !== 'isActive',
})<CustomChipProps>(({ theme, isActive }) => ({
	backgroundColor: isActive ? theme.palette.secondary.main : 'unset',
	color: isActive
		? theme.palette.secondary.contrastText
		: theme.palette.secondary.main,
}))
