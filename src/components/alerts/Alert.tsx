import { FC, useEffect, useState } from 'react'

import { FaExclamationCircle } from 'react-icons/fa'
import { TiInfoOutline, TiWarningOutline } from 'react-icons/ti'

import { GoCheckCircleFill } from 'react-icons/go'

import { HiXMark } from 'react-icons/hi2'

import styles from './Alert.module.scss'

interface IAlertProps {
	message: string
	type: 'success' | 'error' | 'warning' | 'info'
	dismissible?: boolean
	onClose?: () => void
}

export const Alert: FC<IAlertProps> = ({
	message,
	type,
	dismissible = false,
	onClose,
}) => {
	const [showAlert, setShowAlert] = useState(true)
	const [isClosing, setIsClosing] = useState(false)

	useEffect(() => {
		if (dismissible && !showAlert) {
			onClose?.()
		}
	}, [showAlert, dismissible, onClose])

	const closeAlert = () => {
		setIsClosing(true)
		setTimeout(() => {
			setShowAlert(false)
		}, 300)
	}

	let alertStyles = ` ${styles.alert} ${isClosing ? styles.closeAlert : ''}`
	let icon = null

	if (type === 'success') {
		alertStyles += ` ${styles.success}`
		icon = <GoCheckCircleFill className={styles.scIcon} />
	} else if (type === 'error') {
		alertStyles += ` ${styles.error}`
		icon = <FaExclamationCircle className={styles.errorIcon} />
	} else if (type === 'warning') {
		alertStyles += ` ${styles.warning}`
		icon = <TiWarningOutline className={styles.warningIcon} />
	} else if (type === 'info') {
		alertStyles += ` ${styles.info}`
		icon = <TiInfoOutline className={styles.infoIcon} />
	}

	return (
		(showAlert && (
			<div className={alertStyles}>
				<div className='flex items-center gap-3'>
					{icon}
					<p className='font-medium'>{message}</p>
				</div>
				{dismissible && (
					<button className={styles.close} onClick={closeAlert}>
						<HiXMark size={24} />
					</button>
				)}
			</div>
		)) ||
		null
	)
}
