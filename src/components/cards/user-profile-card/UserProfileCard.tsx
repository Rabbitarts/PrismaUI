import { FC, ReactNode } from 'react'
import Card from '../card/Card'

import styles from './UserProfileCard.module.scss'

interface IUserProfileCard {
	className?: string
	name?: string
	age?: number
	children: ReactNode
}

const UserProfileCard: FC<IUserProfileCard> = ({
	className,
	name,
	age,
	children,
}) => {
	return (
		<Card className={` ${styles.card} ${className}`}>
			<h2 className={styles.name}>{name}</h2>
			<p className={styles.age}>{age} years old</p>
			{children}
		</Card>
	)
}

export default UserProfileCard
