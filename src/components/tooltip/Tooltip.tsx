import classNames from 'classnames'
import { FC, ReactNode, useState } from 'react'

import styles from './Tooltip.module.scss'

interface ITooltip {
	content: ReactNode
	position?: 'top' | 'bottom' | 'left' | 'right'
	children: ReactNode
}

export const Tooltip: FC<ITooltip> = ({
	content,
	position = 'top',
	children,
}) => {
	const [isHovered, setIsHovered] = useState(false)

	const handleMouseEnter = () => {
		setIsHovered(true)
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	const tooltipClasses = classNames(styles.tooltip, styles[position], {
		[styles.show]: isHovered,
	})

	return (
		<div
			className='relative inline-block'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{children}
			<div className={tooltipClasses}>{content}</div>
		</div>
	)
}
