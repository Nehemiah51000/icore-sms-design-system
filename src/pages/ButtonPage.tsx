import { Link } from 'react-router-dom';
import { Trash2, Send, Plus } from 'lucide-react';
import { Button } from '../ui/Button/Button';
import { Card, CardHeader, CardBody } from '../ui/Card/Card';

export function ButtonPage() {
  return (
    <div className='min-h-screen bg-bg-base text-text-main p-4 sm:p-8'>
      <header className='mb-6'>
        <Link
          to='/'
          className='text-xs font-medium text-navy-400 hover:underline'>
          ← Back Home
        </Link>
        <h1 className='text-xl sm:text-2xl font-bold mt-1'>Button</h1>
        <p className='text-sm text-text-muted mt-1'>
          Four variants, three sizes, loading and disabled states.
        </p>
      </header>

      <div className='space-y-6 max-w-4xl'>
        <Card>
          <CardHeader>
            <span className='text-xs font-semibold uppercase text-text-muted'>
              Variants
            </span>
          </CardHeader>
          <CardBody className='flex flex-wrap gap-3'>
            <Button variant='primary'>Primary</Button>
            <Button variant='secondary'>Secondary</Button>
            <Button variant='destructive'>Destructive</Button>
            <Button variant='ghost'>Ghost</Button>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <span className='text-xs font-semibold uppercase text-text-muted'>
              Sizes
            </span>
          </CardHeader>
          <CardBody className='flex flex-wrap items-center gap-3'>
            <Button size='sm'>Small</Button>
            <Button size='md'>Medium</Button>
            <Button size='lg'>Large</Button>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <span className='text-xs font-semibold uppercase text-text-muted'>
              States
            </span>
          </CardHeader>
          <CardBody className='flex flex-wrap gap-3'>
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <span className='text-xs font-semibold uppercase text-text-muted'>
              With icons
            </span>
          </CardHeader>
          <CardBody className='flex flex-wrap gap-3'>
            <Button variant='primary'>
              <Send className='h-4 w-4' /> Send
            </Button>
            <Button variant='destructive'>
              <Trash2 className='h-4 w-4' /> Delete
            </Button>
            <Button variant='secondary' size='sm'>
              <Plus className='h-4 w-4' /> Add
            </Button>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <span className='text-xs font-semibold uppercase text-text-muted'>
              Full width
            </span>
          </CardHeader>
          <CardBody>
            <Button fullWidth>Load Credit</Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
