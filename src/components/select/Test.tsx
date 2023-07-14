import { Select } from './Select'

const options = [
	{ value: 'option 1', label: 'option 1' },
	{ value: 'option 2', label: 'option 2' },
	{ value: 'option 3', label: 'option 3' },
	{ value: 'option 4', label: 'option 4' },
]

export const SelectExample = () => {
	const handleSelectChange = (value: string) => {
		console.log('Selected:', value)
	}

	return (
		<div>
			<h2>Select Example</h2>
			<Select
				options={options}
				onChange={handleSelectChange}
				defaultValue='option:'
			/>
		</div>
	)
}
