import { Link } from 'react-router-dom';
import { Select } from '../ui/Select/Select';
import { Card, CardHeader, CardBody } from '../ui/Card/Card';

const providerOptions = [
  { value: 'zettatel', label: 'Zettatel' },
  { value: 'hostpinnacle', label: 'HostPinnacle' },
  { value: 'advanta', label: 'Advanta' },
];

const statusOptions = [
  { value: 'pending', label: 'Pending' },
  { value: 'success', label: 'Success' },
  { value: 'failed', label: 'Failed' },
];

export function SelectPage() {
  return (
    <div className='min-h-screen bg-bg-base text-text-main p-4 sm:p-8'>
      <header className='mb-6'>
        <Link
          to='/'
          className='text-xs font-medium text-navy-400 hover:underline'>
          ← Back Home
        </Link>
        <h1 className='text-xl sm:text-2xl font-bold mt-1'>Select</h1>
        <p className='text-sm text-text-muted mt-1'>
          Native-backed dropdown, styled to match Input.
        </p>
      </header>

      <div className='space-y-6 max-w-md'>
        <Card>
          <CardHeader>
            <span className='text-xs font-semibold uppercase text-text-muted'>
              Basic
            </span>
          </CardHeader>
          <CardBody className='space-y-4'>
            <Select
              label='Provider'
              placeholder='Select a provider'
              options={providerOptions}
            />
            <Select
              label='Transaction status'
              options={statusOptions}
              defaultValue='pending'
              hint='Filter transactions by their current status.'
            />
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <span className='text-xs font-semibold uppercase text-text-muted'>
              Error state
            </span>
          </CardHeader>
          <CardBody>
            <Select
              label='Provider'
              placeholder='Select a provider'
              options={providerOptions}
              error='You must select a provider.'
            />
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <span className='text-xs font-semibold uppercase text-text-muted'>
              Disabled
            </span>
          </CardHeader>
          <CardBody>
            <Select
              label='Provider'
              options={providerOptions}
              defaultValue='zettatel'
              disabled
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
