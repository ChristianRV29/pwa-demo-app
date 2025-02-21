import { Box, Container, styled } from '@mui/material'
import { PropsWithChildren } from 'react'

const Wrapper = styled(Box)`
	min-height: 100vh;
	width: 100%;
`

const ContentContainer = styled(Container)(({ theme }) => ({
	position: 'relative',
	padding: theme.spacing(2),

	[theme.breakpoints.up('md')]: {
		padding: theme.spacing(4),
	},
}))

export const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<Wrapper as="main">
			<ContentContainer maxWidth="md">{children}</ContentContainer>
		</Wrapper>
	)
}
