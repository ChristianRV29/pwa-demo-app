import { Checkbox, ListItem, styled } from '@mui/material'

export const StyledListItem = styled(ListItem)(({ theme }) => ({
	alignItems: 'center',
	borderRadius: theme.spacing(3),
	color: theme.palette.text.primary,
	display: 'flex',
	flexDirection: 'row',
	boxShadow: theme.shadows[3],
}))

export const StyledCheckBox = styled(Checkbox)(({ theme }) => ({
	color: theme.palette.primary.main,

	'&.Mui-checked': {
		color: theme.palette.success.main,
	},
}))
