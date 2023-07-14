import Image from 'next/image'
import { FC, ReactNode } from 'react'
import Card from '../card/Card'

import styles from './ProductCard.module.scss'

interface IProductCard {
	className?: string
	title: string
	price?: number
	imageUrl?: string
	children: ReactNode
}

const ProductCard: FC<IProductCard> = ({
	className,
	title,
	price,
	imageUrl,
	children,
}) => {
	return (
		<Card className={` ${styles.card} ${className}`}>
			{imageUrl && (
				<div className={styles.imageWrapper}>
					<Image
						src={imageUrl}
						alt={title}
						// layout='fill'
						width={500}
						height={500}
						className={styles.image}
					/>
				</div>
			)}
			<div className='p-4'>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.price}>{price}</p>

				{children}
			</div>
		</Card>
	)
}

export default ProductCard
