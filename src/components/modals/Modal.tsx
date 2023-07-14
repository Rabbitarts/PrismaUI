import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import styles from './Modal.module.scss'

import { HiXMark } from 'react-icons/hi2'

interface IModalProps {
	isOpen: boolean
	title?: string
	children: ReactNode
	onClose: () => void
	className?: string
}

export const Modal: FC<IModalProps> = ({
	isOpen,
	onClose,
	title,
	children,
	className,
	...rest
}) => {
	if (!isOpen) return null

	const contentClasses = classNames(styles.content, className)

	return (
		<div className={styles.overlay}>
			<div className={contentClasses} {...rest}>
				<div className={styles.header}>
					{title && <h2 className={styles.title}>{title}</h2>}
					<button onClick={onClose}>
						<HiXMark size={26} />
					</button>
				</div>
				{children}
			</div>
		</div>
	)
}