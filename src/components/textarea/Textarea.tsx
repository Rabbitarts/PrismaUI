import { FC } from 'react'

interface ITextArea {
	value?: string
	onChange?: () => void
	placeholder?: string
}

export const Textarea: FC<ITextArea> = ({ value, onChange, placeholder }) => {
	return (
		<textarea
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className='w-full border border-[#ccc] rounded p-2.5 transition outline-none focus:border-[#0070f3] '
		></textarea>
	)
}
