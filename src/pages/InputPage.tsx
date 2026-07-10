import { Link } from 'react-router-dom';
import { Phone, Hash, Search, Eye } from 'lucide-react';
import { Input } from '../ui/Input/Input';
import { Card, CardHeader, CardBody } from '../ui/Card/Card';

export function InputPage() {
  return (
    <div className='min-h-screen bg-bg-base text-text-main p-4 sm:p-8'>
      <header className='mb-6'>
        <Link
          to='/'
          className='text-xs font-medium text-navy-400 hover:underline'>
          ← Back Home
        </Link>
        <h1 className='text-xl sm:text-2xl font-bold mt-1'>Input</h1>
        <p className='text-sm text-text-muted mt-1'>
          Text input with label, error, hint, and icon slots.
        </p>
      </header>

      <div className='space-y-6 max-w-2xl'>
        <Card>
          <CardHeader>
            <span className='text-xs font-semibold uppercase text-text-muted'>
              Basic
            </span>
          </CardHeader>
          <CardBody className='space-y-4'>
            <Input label='Full name' placeholder='e.g. Test User' />
            <Input
              label='Phone number'
              placeholder='2547XXXXXXXX'
              leftIcon={<Phone className='h-4 w-4' />}
              hint='Include the country code, no leading zero.'
            />
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <span className='text-xs font-semibold uppercase text-text-muted'>
              Error state
            </span>
          </CardHeader>
          <CardBody className='space-y-4'>
            <Input
              label='Amount (KES)'
              placeholder='0'
              leftIcon={<Hash className='h-4 w-4' />}
              defaultValue='abc'
              error='Amount must be a valid number.'
            />
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <span className='text-xs font-semibold uppercase text-text-muted'>
              Disabled
            </span>
          </CardHeader>
          <CardBody className='space-y-4'>
            <Input label='Provider' defaultValue='Zettatel' disabled />
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <span className='text-xs font-semibold uppercase text-text-muted'>
              Right icon
            </span>
          </CardHeader>
          <CardBody className='space-y-4'>
            <Input
              placeholder='Search transactions...'
              leftIcon={<Search className='h-4 w-4' />}
            />
            <Input
              type='password'
              label='Password'
              rightIcon={<Eye className='h-4 w-4' />}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
