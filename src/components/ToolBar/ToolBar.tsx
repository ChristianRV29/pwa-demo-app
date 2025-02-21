import { Box, Stack } from '@mui/material'

import { SearchBar, CustomChip } from '@components'
import { Filter as ActiveChip } from '@types'

import { StyledToolbar } from './ToolBar.styles'

interface ToolBarProps {
	searchTerm: string
	setSearchTerm: (searchTerm: string) => void
	currentFilter: ActiveChip
	setCurrentFilter: (filter: ActiveChip) => void
}

export const ToolBar = ({
	currentFilter: activeChip,
	setCurrentFilter: setActiveChip,
	searchTerm,
	setSearchTerm,
}: ToolBarProps) => {
	const toggleActiveChip = (label: string) => {
		setActiveChip(label.toLowerCase() as ActiveChip)
	}

	const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value)
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
				<SearchBar value={searchTerm} onChange={onChangeSearch} />
			</StyledToolbar>
		</Box>
	)
}
