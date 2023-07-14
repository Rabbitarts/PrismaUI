import classNames from 'classnames'
import { FC, ReactNode, useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import { HiMinus } from 'react-icons/hi2'
import styles from './Accordion.module.scss'

interface IAccordion {
	className?: string
	defaultExpanded?: boolean
	children: ReactNode
}

export const Accordion: FC<IAccordion> = ({
	className,
	defaultExpanded,
	children,
}) => {
	const [expanded, setExpanded] = useState(defaultExpanded || false)

	const handleToggle = () => {
		setExpanded(!expanded)
	}

	return <div className='border border-[#ddd] rounded-lg'>{children}</div>
}

interface IAccordionItem {
	title: string
	initiallyExpanded?: boolean
	children: ReactNode
}

export const AccordionItem: FC<IAccordionItem> = ({
	title,
	initiallyExpanded,
	children,
}) => {
	const [expanded, setExpanded] = useState(initiallyExpanded || false)

	const handleToggle = () => {
		setExpanded(!expanded)
	}

	const itemClasses = classNames(styles.item, {
		[styles.expanded]: expanded,
	})

	return (
		<div className={itemClasses}>
			<div
				className='flex items-center justify-between p-4 cursor-pointer'
				onClick={handleToggle}
			>
				<h3 className='font-medium'>{title}</h3>
				<div className='flex items-center justify-center bg-[#ddd] text-gray-600 w-[24px] h-[24px] rounded-full'>
					{expanded ? <HiMinus /> : <HiPlus />}
				</div>
			</div>
			{expanded && <div className={styles.content}>{children}</div>}
		</div>
	)
}
