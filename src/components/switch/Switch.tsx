import classNames from 'classnames'
import { ChangeEvent, FC, useState } from 'react'
import styles from './Switch.module.scss'

interface ISwitch {
	checked: boolean
	onChange: (checked: boolean) => void
	className?: string
}

export const Switch: FC<ISwitch> = ({ checked, onChange, className }) => {
	const [isChecked, setIsChecked] = useState(checked)

	const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.checked
		setIsChecked(newValue)
		onChange(newValue)
	}

	const switchClasses = classNames(styles.switch, className)

	return (
		<label className={switchClasses}>
			<input
				type='checkbox'
				checked={isChecked}
				onChange={handleToggle}
				className={styles.input}
			/>
			<span className={styles.slider}></span>
		</label>
	)
}
