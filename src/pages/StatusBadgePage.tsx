import { Link } from 'react-router-dom';
import { StatusBadge } from '../ui/StatusBadge/StatusBadge';
import { Card, CardHeader, CardBody } from '../ui/Card/Card';

export function StatusBadgePage() {
  return (
    <div className='min-h-screen bg-bg-base text-text-main p-4 sm:p-8'>
      <header className='mb-6'>
        <Link
          to='/'
          className='text-xs font-medium text-navy-400 hover:underline'>
          ← Back Home
        </Link>
        <h1 className='text-xl sm:text-2xl font-bold mt-1'>StatusBadge</h1>
        <p className='text-sm text-text-muted mt-1'>
          Maps directly to transaction status/stage values from the backend.
        </p>
      </header>

      <div className='space-y-6 max-w-2xl'>
        <Card>
          <CardHeader>
            <span className='text-xs font-semibold uppercase text-text-muted'>
              All statuses
            </span>
          </CardHeader>
          <CardBody className='flex flex-wrap gap-3'>
            <StatusBadge status='success'>Success</StatusBadge>
            <StatusBadge status='error'>Failed</StatusBadge>
            <StatusBadge status='warning'>Low Balance</StatusBadge>
            <StatusBadge status='pending'>Pending</StatusBadge>
            <StatusBadge status='info'>STK Initiated</StatusBadge>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <span className='text-xs font-semibold uppercase text-text-muted'>
              Sizes
            </span>
          </CardHeader>
          <CardBody className='flex flex-wrap items-center gap-3'>
            <StatusBadge status='success' size='sm'>
              Small
            </StatusBadge>
            <StatusBadge status='success' size='md'>
              Medium
            </StatusBadge>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <span className='text-xs font-semibold uppercase text-text-muted'>
              Without icon
            </span>
          </CardHeader>
          <CardBody className='flex flex-wrap gap-3'>
            <StatusBadge status='success' showIcon={false}>
              Success
            </StatusBadge>
            <StatusBadge status='error' showIcon={false}>
              Failed
            </StatusBadge>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <span className='text-xs font-semibold uppercase text-text-muted'>
              Real usage — transaction table row
            </span>
          </CardHeader>
          <CardBody>
            <div className='flex items-center justify-between text-sm border-b border-border-main pb-2 mb-2'>
              <span>TXN-1042 · KES 50</span>
              <StatusBadge status='success'>credit_loaded</StatusBadge>
            </div>
            <div className='flex items-center justify-between text-sm border-b border-border-main pb-2 mb-2'>
              <span>TXN-1043 · KES 20</span>
              <StatusBadge status='error'>failed</StatusBadge>
            </div>
            <div className='flex items-center justify-between text-sm'>
              <span>TXN-1044 · KES 100</span>
              <StatusBadge status='pending'>stk_initiated</StatusBadge>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
