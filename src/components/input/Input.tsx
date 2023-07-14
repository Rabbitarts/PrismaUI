import { ChangeEvent, FC } from 'react'

import { BiSearch } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import { LuLock } from 'react-icons/lu'
import styles from './Input.module.scss'

import { AiOutlineUser } from 'react-icons/ai'

interface IInputProps {
	label?: string
	type: 'text' | 'search' | 'password' | 'email'
	placeholder?: string
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	required?: boolean
}

export const Input: FC<IInputProps> = ({
	label,
	value,
	onChange,
	type,
	placeholder,
	required = false,
}) => {
	let icon = null

	if (type === 'search') {
		icon = <BiSearch className={styles.searchIcon} />
	} else if (type === 'password') {
		icon = <LuLock className={styles.passwordIcon} />
	} else if (type === 'email') {
		icon = <HiOutlineMail className={styles.emailIcon} />
	} else if (type === 'text') {
		icon = <AiOutlineUser className={styles.textIcon} />
	}

	return (
		<div className={styles.defaultInput}>
			<label className={styles.label} htmlFor='input'>
				{label}
			</label>
			<div className='relative'>
				{icon}
				<input
					className={styles.input}
					id='input'
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					required={required}
				/>
			</div>
		</div>
	)
}
