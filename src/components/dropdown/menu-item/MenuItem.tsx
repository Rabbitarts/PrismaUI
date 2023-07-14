import { FC, ReactNode } from 'react'
import styles from './MenuItem.module.scss'

import classNames from 'classnames'

interface IMenuItemProps {
	children: ReactNode
	onClick?: () => void
	className?: string
}

const MenuItem: FC<IMenuItemProps> = ({ children, onClick, className }) => {
	const handleClick = () => {
		if (onClick) {
			onClick()
		}
	}

	const MenuItemsClasses = classNames(styles.menuItem, className)

	return (
		<div className={MenuItemsClasses} onClick={handleClick}>
			{children}
		</div>
	)
}

export default MenuItem
