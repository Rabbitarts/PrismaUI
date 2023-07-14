import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import styles from './Avatar.module.scss'

interface IAvatar {
	src: string
	alt?: string
	type?: 'bordered'
	size?: 'small' | 'medium' | 'large'
	className?: string
	children?: ReactNode
}

export const Avatar: FC<IAvatar> = ({
	src,
	alt,
	type,
	size = 'small',
	className,
	children,
}) => {
	const avatarClasses = classNames(
		styles.avatar,
		{
			[styles.small]: size === 'small',
			[styles.medium]: size === 'medium',
			[styles.large]: size === 'large',
			[styles.bordered]: type === 'bordered',
		},
		className
	)

	return (
		<div className={avatarClasses}>
			<img src={src} alt={alt} />
			{children}
		</div>
	)
}
