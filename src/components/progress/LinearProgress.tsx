import { FC } from 'react'
import Progress from './Progress'

interface ILinearProgressProps {
	value: number
	className?: string
	text?: boolean
}

const LinearProgress: FC<ILinearProgressProps> = ({
	value,
	className,
	text,
}) => {
	return <Progress value={value} className={className} text={text} />
}

export default LinearProgress
