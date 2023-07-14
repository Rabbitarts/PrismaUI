import classNames from 'classnames'
import { FC } from 'react'

import styles from './Button.module.scss'

interface IButton {
	children: string | React.ReactNode
	type?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
	outline?: boolean
	rounded?: boolean
	onClick?: () => void
	className?: string
}

export const Button: FC<IButton> = ({
	children,
	type = 'primary',
	outline = false,
	rounded = false,
	onClick,
	className,
	...rest
}) => {
	const buttonClasses = classNames(
		styles.button,
		{
			[styles.primary]: type === 'primary',
			[styles.secondary]: type === 'secondary',
			[styles.success]: type === 'success',
			[styles.warning]: type === 'warning',
			[styles.error]: type === 'error',
			[styles.info]: type === 'info',
			[styles.outline]: outline,
			[styles.rounded]: rounded,
		},
		className
	)

	return (
		<button className={buttonClasses} {...rest} onClick={onClick}>
			{children}
		</button>
	)
}
