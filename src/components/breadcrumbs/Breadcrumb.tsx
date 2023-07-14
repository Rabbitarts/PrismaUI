import { FC, ReactNode } from 'react'
import { FiChevronRight } from 'react-icons/fi'

import styles from './Breadcrumbs.module.scss'

interface IBreadcrumb {
	children: ReactNode
}

interface IBreadcrumbItem {
	children: ReactNode
}

interface IBreadcrumbLink {
	href: string
	children: ReactNode
}

const Breadcrumb: FC<IBreadcrumb> = ({ children }) => {
	return <nav className={styles.breadcrumbs}>{children}</nav>
}

const BreadcrumbItem: FC<IBreadcrumbItem> = ({ children }) => {
	return <li className={styles.item}>{children}</li>
}

const BreadcrumbLink: FC<IBreadcrumbLink> = ({ href, children }) => {
	return (
		<a href={href} className={styles.link}>
			{children}
		</a>
	)
}

const BreadcrumbDivider: FC = () => {
	return <FiChevronRight className={styles.divider} />
}

export { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbDivider }
