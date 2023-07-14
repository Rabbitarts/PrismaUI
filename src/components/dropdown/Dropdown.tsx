import classNames from 'classnames'
import { FC, ReactNode, useState } from 'react'
import styles from './Dropdown.module.scss'

import { BsChevronDown } from 'react-icons/bs'

import { useOutside } from '@/hooks/UseOutside'

interface IDropdownProps {
	trigger: ReactNode
	children: ReactNode
	className?: string
	menuClassName?: string
}

export const Dropdown: FC<IDropdownProps> = ({
	trigger,
	children,
	className,
	menuClassName,
}) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const dropdownClasses = classNames(styles.dropdown, className)

	const menuClasses = classNames(styles.menu, menuClassName, {
		[styles.open]: isOpen,
	})

	const dropdownRef = useOutside(() => {
		setIsOpen(false)
	})

	return (
		<div className={dropdownClasses} ref={dropdownRef}>
			<div className={styles.trigger} onClick={toggleDropdown}>
				{trigger}
				<BsChevronDown
					size={18}
					className={isOpen ? styles.iconOpen : styles.icon}
				/>
			</div>
			{isOpen && <div className={menuClasses}>{children}</div>}
		</div>
	)
}
