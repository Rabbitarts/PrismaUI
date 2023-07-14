import { FC, ReactNode } from 'react'
import styles from './Card.module.scss'

interface ICardProps {
	className?: string
	children: ReactNode
}

const Card: FC<ICardProps> = ({ className, children }) => {
	return <div className={`${styles.card} ${className}`}>{children}</div>
}

export default Card
