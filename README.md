# Prisma UI Kit
## Getting Started

Installation.

How to install your UI Kit in a project:

```bash
npm install PrismaUI
# or
yarn add PrismaUI
```

## Usage.

# Button

Examples of use:

```tsx
import { Button } from 'PrismaUI';

<Button type='primary' rounded onClick={handleClick}>Click Me</Button>
```

# Alert

Examples of use:

```tsx
import { Alert } from 'PrismaUI';

<Alert type="success">Success message</Alert>
```

# Modal

Examples of use:

```tsx
import { Modal } from 'PrismaUI';

const [isModalOpen, setIsModalOpen] = useState(false)

const handleModalOpen = () => {
	setIsModalOpen(true)
}

const handleModalClose = () => {
	setIsModalOpen(false)
}

<Modal isOpen={isModalOpen} onClose={handleClose}>
  {Content}
</Modal>
```

# Input 

Examples of use:

```tsx
import { Input } from 'PrismaUI';

<Input
type="text | email | password | search"
placeholder="Text..."
onChange={handleChange}
value={value}
/>
```

### More components and a use case will be coming later
