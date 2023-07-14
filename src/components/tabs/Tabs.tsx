import classNames from 'classnames'
import { FC, ReactNode, useState } from 'react'

import styles from './Tabs.module.scss'

interface ITabs {
	className: string
	defaultActiveTab?: number
	children: ReactNode
}

interface ITab {
	label: string
	children: ReactNode
}

const Tabs: FC<ITabs> = ({ className, defaultActiveTab, children }) => {
	const [activeTab, setActiveTab] = useState(defaultActiveTab || 0)

	const handleTabClick = (index: number) => {
		setActiveTab(index)
	}

	return (
		<div className={classNames(styles.tabs, className)}>
			<div className=''></div>
		</div>
	)
}

export default Tabs
