import { Box, Container, styled } from '@mui/material'
import { PropsWithChildren } from 'react'

const Wrapper = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.dark,
	minHeight: '100vh',
	width: '100%',
}))

const ContentContainer = styled(Container)(({ theme }) => ({
	padding: theme.spacing(2),

	[theme.breakpoints.up('md')]: {
		padding: theme.spacing(4),
	},
}))

export const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<Wrapper as="main">
			<ContentContainer maxWidth="lg">{children}</ContentContainer>
		</Wrapper>
	)
}
