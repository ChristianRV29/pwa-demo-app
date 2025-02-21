import { Chip, styled } from '@mui/material'

import { CustomChipProps } from './Chip'

export const StyledChip = styled(Chip, {
	shouldForwardProp: prop => prop !== 'isActive',
})<CustomChipProps>(({ theme, isActive }) => ({
	backgroundColor: isActive ? theme.palette.primary.main : 'unset',
	color: isActive ? theme.palette.text.secondary : theme.palette.text.primary,
	borderColor: theme.palette.primary.main,
}))
