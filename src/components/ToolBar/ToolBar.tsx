import { useState } from 'react'
import { Box, Stack } from '@mui/material'

import { SearchBar, CustomChip } from '@components'
import { StyledToolbar } from './ToolBar.styles'

type ActiveChip = 'all' | 'completed' | 'pending'

export const ToolBar = () => {
	const [activeChip, setActiveChip] = useState<ActiveChip>('all')

	const toggleActiveChip = (label: string) => {
		setActiveChip(label.toLowerCase() as ActiveChip)
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<StyledToolbar>
				<Stack direction="row" spacing={1}>
					<CustomChip
						isActive={activeChip === 'all'}
						label="All"
						onClick={toggleActiveChip}
						variant="outlined"
					/>
					<CustomChip
						isActive={activeChip === 'completed'}
						label="Completed"
						onClick={toggleActiveChip}
						variant="outlined"
					/>
					<CustomChip
						isActive={activeChip === 'pending'}
						label="Pending"
						onClick={toggleActiveChip}
						variant="outlined"
					/>
				</Stack>
				<SearchBar />
			</StyledToolbar>
		</Box>
	)
}
