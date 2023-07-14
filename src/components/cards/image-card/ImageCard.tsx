import Image from 'next/image'
import { FC, ReactNode } from 'react'
import Card from '../card/Card'

import styles from './ImageCard.module.scss'

interface IImageCard {
	className?: string
	imageUrl?: string
	alt: string
	children: ReactNode
}

const ImageCard: FC<IImageCard> = ({ alt, imageUrl, className, children }) => {
	return (
		<Card className={`${styles.card} ${className}`}>
			{imageUrl && (
				<div className={styles.imageWrapper}>
					<Image
						src={imageUrl}
						alt={alt}
						width={800}
						height={600}
						className={styles.image}
					/>
				</div>
			)}
			<div className='flex justify-center mb-2'>{children}</div>
		</Card>
	)
}

export default ImageCard
