import { FC, ReactNode } from 'react'
import Card from '../card/Card'

import Image from 'next/image'

import styles from './BlogPostCard.module.scss'

interface IBlogPostCard {
	className?: string
	image?: boolean
	imageUrl: string
	alt: string
	title: string
	content: string
	children: ReactNode
}

const BlogPostCard: FC<IBlogPostCard> = ({
	className,
	image = false,
	imageUrl,
	title,
	alt,
	content,
	children,
}) => {
	return (
		<Card className={` ${styles.card} ${className}`}>
			{image && (
				<Image
					src={imageUrl}
					width={500}
					height={500}
					alt={alt}
					className={styles.image}
				/>
			)}
			<div>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.content}>{content}</p>
			</div>
			{children}
		</Card>
	)
}

export default BlogPostCard
