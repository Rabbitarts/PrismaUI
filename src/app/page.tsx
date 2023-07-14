'use client'

import { ChangeEvent, useState } from 'react'

import {
	Breadcrumb,
	BreadcrumbDivider,
	BreadcrumbItem,
	BreadcrumbLink,
} from '@/components/breadcrumbs/Breadcrumb'

import { Accordion, AccordionItem } from '@/components/accordion'
import { Alert } from '@/components/alerts'
import { Avatar } from '@/components/avatar'
import { Button } from '@/components/buttons'
import { Carousel } from '@/components/carousel'
import { Dropdown } from '@/components/dropdown'
import MenuItem from '@/components/dropdown/menu-item/MenuItem'
import { Input } from '@/components/input'
import { Modal } from '@/components/modals'
import LinearProgress from '@/components/progress/LinearProgress'
import { SelectExample } from '@/components/select'
import { Switch } from '@/components/switch'
import { Tag } from '@/components/tag'
import { Textarea } from '@/components/textarea'
import { Tooltip } from '@/components/tooltip'
import styles from './page.module.scss'

export default function Home() {
	const [inputValue, setInputValue] = useState('')
	const [showAlert, setShowAlert] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isChecked, setIsChecked] = useState(false)

	const handleSwitch = (checked: boolean) => {
		setIsChecked(checked)
	}

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

	const handleButtonClick = () => {
		alert(`Input value: ${inputValue}`)
	}

	const AlertClose = () => {
		setShowAlert(false)
	}

	const ShowAlert = () => {
		setShowAlert(true)
	}

	const handleModalOpen = () => {
		setIsModalOpen(true)
	}

	const handleModalClose = () => {
		setIsModalOpen(false)
	}

	return (
		<main className='p-8'>
			<h1>Welcome to My UI Kit</h1>
			<Input
				type='search'
				// label='Enter text'
				placeholder='Enter your text'
				value={inputValue}
				onChange={handleInputChange}
				required={true}
			/>
			<Tooltip content='Primary button' position='top'>
				<Button type='secondary' onClick={handleModalOpen}>
					Primary Button
				</Button>
			</Tooltip>

			<Modal
				isOpen={isModalOpen}
				onClose={handleModalClose}
				title='My Modal'
				className={styles.redModal}
			>
				<p>This is the content of the modal.</p>
			</Modal>

			<Dropdown trigger={<button>Dropdown</button>}>
				<MenuItem>Item 1</MenuItem>
				<MenuItem>Item 2</MenuItem>
				<MenuItem>Item 3</MenuItem>
			</Dropdown>

			<div className='mt-6'>
				<LinearProgress value={25} className={styles.progress} text={true} />
				{/* <CircularProgress
					value={75}
					className='my-circular-progress'
				/> */}
			</div>

			{/* <Cards /> */}

			<Textarea placeholder='This is default value' />

			<div className='mt-4 flex gap-4'>
				<Tag
					label='Pink'
					color='pink'
					className='mb-2'
					onClick={() => console.log('Pink tag clicked')}
				/>
				<Tag label='Green' color='green' className='mb-2' />
				<Tag label='Yellow' color='yellow' className='mb-2' />
				<Tag label='Blue' color='blue' className='mb-2' />
				<Tag label='Purple' color='purple' className='mb-2' />
				<Tag label='Orange' color='orange' className='mb-2' />
				<Tag label='Red' color='red' className='mb-2' />
				<Tag label='Gray' color='gray' className='mb-2' />
				<Tag label='Cyan' color='cyan' className='mb-2' />
			</div>

			<div className='mt-6'>
				<Breadcrumb>
					<BreadcrumbItem>
						<BreadcrumbLink href='/'>Home</BreadcrumbLink>
						<BreadcrumbDivider />
					</BreadcrumbItem>
					<BreadcrumbItem>
						<BreadcrumbLink href='/category'>Category</BreadcrumbLink>
						<BreadcrumbDivider />
					</BreadcrumbItem>
					<BreadcrumbItem>
						<span>Product</span>
					</BreadcrumbItem>
				</Breadcrumb>
			</div>

			<div className='mt-4'>
				<Avatar src='/avatar.jpg' size='large' type='bordered' />
			</div>

			<Accordion>
				<AccordionItem title='Section 1'>
					<p>Content for section 1</p>
				</AccordionItem>
				<AccordionItem title='Section 2'>
					<p>Content for the section 2</p>
				</AccordionItem>
				<AccordionItem title='Section 3' initiallyExpanded>
					<p>Content for section 3</p>
				</AccordionItem>
			</Accordion>

			<Tooltip content='Tooltip' position='bottom'>
				<button>Hover me</button>
			</Tooltip>

			<div>
				<Switch checked={isChecked} onChange={handleSwitch} />
				<p>Checked: {isChecked.toString()}</p>
			</div>

			<div className='my-4'>
				<SelectExample />
			</div>

			<Carousel
				images={[
					'/slide1.avif',
					'/slide2.avif',
					'/slide3.avif',
					'/html.png',
					'/img.png',
				]}
				activeDot={false}
				// autoPlay={true}
			/>

			{showAlert && (
				<Alert
					message='This is an alert!'
					type='success'
					dismissible={true}
					onClose={AlertClose}
				/>
			)}
		</main>
	)
}
