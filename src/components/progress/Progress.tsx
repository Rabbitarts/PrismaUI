import { FC } from 'react'
import styles from './Progress.module.scss'

interface IProgress {
	value: number
	className?: string
	text?: boolean
}

export const Progress: FC<IProgress> = ({ value, className, text = false }) => {
	return (
		<div className={`${styles.progress} ${className}`}>
			<div className={styles.progressBar} style={{ width: `${value}%` }}></div>
			{text && <span className={styles.text}>{value}%</span>}
		</div>
	)
}

export default Progress
