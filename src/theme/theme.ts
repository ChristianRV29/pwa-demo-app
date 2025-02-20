import { createTheme } from '@mui/material'

const theme = createTheme({
	cssVariables: true,
	palette: {
		primary: {
			main: '#556e91',
			light: '#cfd7e3',
			dark: '#263140',
		},
		secondary: {
			main: '#999999',
			light: '#bfbfbf',
			dark: '#737373',
		},
		success: {
			main: '#00cc00',
			light: '#99ff99',
			dark: '#008000',
		},
		error: {
			main: '#cc3300',
			light: '#ff8c66',
			dark: '#992600',
		},
		warning: {
			main: '#ffcc00',
			light: '#ffeb99',
			dark: '#cca300',
		},
		text: {
			primary: '#000000',
			secondary: '#FFFFFF',
		},
	},
})

export default theme
