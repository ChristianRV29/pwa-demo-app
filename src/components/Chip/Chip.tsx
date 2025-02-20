import { ChipOwnProps } from '@mui/material'

import { StyledChip } from './Chip.styles'

export type CustomChipProps = Omit<ChipOwnProps, 'label'> & {
	label: string
	isActive: boolean
	onClick: (label: string) => void
}

export const CustomChip = ({
	isActive,
	label,
	onClick,
	...props
}: CustomChipProps) => {
	return (
		<StyledChip
			{...props}
			isActive={isActive}
			label={label}
			onClick={() => onClick(label)}
		/>
	)
}
