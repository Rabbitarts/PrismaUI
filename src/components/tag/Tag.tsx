import classNames from 'classnames'
import { FC } from 'react'

import styles from './Tag.module.scss'

interface ITag {
	label: string
	color?:
		| 'green'
		| 'blue'
		| 'orange'
		| 'red'
		| 'pink'
		| 'purple'
		| 'yellow'
		| 'gray'
		| 'cyan'
	className?: string
	onClick?: () => void
}

export const Tag: FC<ITag> = ({
	label,
	color = 'primary',
	className,
	onClick,
}) => {
	const tagClasses = classNames(styles.tag, styles[color], className)

	const handleClick = () => {
		if (onClick) {
			onClick()
		}
	}

	return (
		<div className={tagClasses} onClick={handleClick}>
			<span className={styles.label}>{label}</span>
		</div>
	)
}
