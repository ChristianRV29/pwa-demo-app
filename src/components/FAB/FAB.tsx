import NoteAddIcon from '@mui/icons-material/NoteAdd'

import { StyledFAB } from './FAB.styles'

interface FABProps {
	onPlusClick: () => void
}

export const FAB = ({ onPlusClick }: FABProps) => {
	return (
		<StyledFAB onClick={onPlusClick}>
			<NoteAddIcon />
		</StyledFAB>
	)
}
