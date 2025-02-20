import type { InputBaseProps } from '@mui/material'

import { Search, SearchIconWrapper, StyledInput } from './SearchBar.styles'

import SearchIcon from '@mui/icons-material/Search'

type SearchBarProps = InputBaseProps & {
	placeholder?: string
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchBar = ({
	placeholder = 'Search...',
	onChange,
	...props
}: SearchBarProps) => {
	return (
		<Search>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInput
				{...props}
				placeholder={placeholder}
				onChange={onChange}
				inputProps={{ 'aria-label': 'search' }}
			/>
		</Search>
	)
}
