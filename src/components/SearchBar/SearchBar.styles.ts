import { InputBase, styled, lighten } from '@mui/material'

export const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	backgroundColor: lighten(theme.palette.secondary.main, 0.6),
	width: '100%',
	borderRadius: theme.spacing(10),
	'&:hover': {
		backgroundColor: lighten(theme.palette.secondary.main, 0.75),
	},
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}))

export const SearchIconWrapper = styled('aside')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}))

export const StyledInput = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	width: '100%',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}))
