import ImageCard from '@/components/cards/image-card/ImageCard'

import styles from './styles.module.scss'

const Cards = () => {
	return (
		<div>
			<ImageCard
				className={styles.imageCard}
				imageUrl='/img.png'
				alt='Image Card'
			>
				<p className='text-gray-500'>Lorem ipsum dolor sit amet.</p>
			</ImageCard>

			{/* <ProductCard
				className={styles.card}
				title='Product Title'
				price={29.99}
				imageUrl='/html.png'
			>
				<button className={styles.addToCart}>
					Add to Cart
				</button>
			</ProductCard>

			<UserProfileCard className={styles.card} name='John Doe' age={30}>
				<p className='text-gray-600'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</UserProfileCard>

			<BlogPostCard
				image={true}
				imageUrl='/img.png'
				alt='code'
				className={styles.card}
				title='Blog Post Title'
				content='Lorem ipsum dolor sit amet.'
			>
				<button className={styles.readMore}>Read More</button>
			</BlogPostCard> */}
		</div>
	)
}

export default Cards
