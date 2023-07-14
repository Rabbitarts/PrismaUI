import { FC } from 'react'

import styles from './Progress.module.scss'

interface ICircularProgress {
	value: number
	className?: string
}

const CircularProgress: FC<ICircularProgress> = ({
	value,
	className,
}) => {

	return (
		// TODO: Create a progress bar circle
		<div></div>
	)
}

export default CircularProgress
