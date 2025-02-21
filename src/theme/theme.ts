import { createTheme } from '@mui/material'

const theme = createTheme({
	cssVariables: true,
	palette: {
		primary: {
			main: '#578fca',
			light: '#c5d8ed',
			dark: '#254b74',
		},
		secondary: {
			main: '#bcccdc',
			light: '#cdd9e5',
			dark: '#466686',
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
			primary: '#2c4054',
			secondary: '#ffffff',
		},
	},
})

export default theme
