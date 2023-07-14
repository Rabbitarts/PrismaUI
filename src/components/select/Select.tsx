import { FC, useState } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

import './Select.scss'

interface IOption {
	value: string
	label: string
}

interface ISelect {
	options: IOption[]
	onChange: (value: string) => void
	defaultValue?: string
}

export const Select: FC<ISelect> = ({ options, onChange, defaultValue }) => {
	const [selectedValue, setSelectedValue] = useState(
		defaultValue || options[0]?.value
	)
	const [isExpanded, setIsExpanded] = useState(false)

	const handleToggle = () => {
		setIsExpanded(!isExpanded)
	}

	const handleOptionClick = (value: string) => {
		setSelectedValue(value)
		onChange(value)
		setIsExpanded(false)
	}

	return (
		<div className='relative inline-flex flex-col'>
			<div
				className='inline-flex items-center p-2 border border-[#DEDEDE] rounded-lg'
				onClick={handleToggle}
			>
				<span className='text-gray-600'>{selectedValue}</span>
				{isExpanded ? (
					<HiChevronDown size={16} className='ml-2 text-gray-600' />
				) : (
					<HiChevronUp size={16} className='ml-2 text-gray-600' />
				)}
			</div>
			{isExpanded && (
				<div className='absolute top-[125%] left-0 w-full bg-white border border-[#DEDEDE] rounded-lg shadow selectMenu'>
					{options.map(option => (
						<div
							key={option.value}
							className='p-2 hover:bg-gray-200 cursor-pointer transition-colors duration-300'
							onClick={() => handleOptionClick(option.value)}
						>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	)
}
