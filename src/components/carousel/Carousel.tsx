import Image from 'next/image'
import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import styles from './Carousel.module.scss'

interface ICarousel {
	images: ReactNode[]
	autoPlay?: boolean
	delay?: number
	activeDot?: boolean
}

export const Carousel: FC<ICarousel> = ({
	images,
	autoPlay = false,
	delay = 3000,
	activeDot = false,
}) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0)
	const [activeDotIndex, setActiveDotIndex] = useState(0)

	const timerRef = useRef<NodeJS.Timeout | null>(null)

	const nextImage = () => {
		setCurrentImageIndex(prevIndex => {
			const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1
			setActiveDotIndex(newIndex)
			return newIndex
		})
	}

	const previousImage = () => {
		setCurrentImageIndex(prevIndex => {
			const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1
			setActiveDotIndex(newIndex)
			return newIndex
		})
	}

	const startAutoplay = () => {
		timerRef.current = setInterval(() => {
			nextImage()
		}, delay)
	}

	const stopAutoplay = () => {
		if (timerRef.current) {
			clearInterval(timerRef.current)
			timerRef.current = null
		}
	}

	useEffect(() => {
		if (autoPlay) {
			startAutoplay()
		} else {
			stopAutoplay()
		}

		return () => {
			stopAutoplay()
		}
	}, [autoPlay])

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'ArrowLeft') {
			previousImage()
		} else if (event.key === 'ArrowRight') {
			nextImage()
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [])

	return (
		<div className='flex gap-3'>
			<button
				onClick={previousImage}
				className='text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200'
			>
				<FiChevronLeft size={24} />
			</button>
			<div>
				<Image
					src={images[currentImageIndex]}
					alt='carousel'
					className={styles.image}
					width={500}
					height={300}
				/>
			</div>
			{activeDot && (
				<div className={styles.dotsContainer}>
					{images.map((_, index) => (
						<button
							key={index}
							className={`${styles.dot} ${
								index === activeDotIndex ? styles.active : ''
							}`}
							onClick={() => {
								setCurrentImageIndex(index)
								setActiveDotIndex(index)
							}}
						/>
					))}
				</div>
			)}
			<button
				onClick={nextImage}
				className='text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200'
			>
				<FiChevronRight size={24} />
			</button>
		</div>
	)
}
