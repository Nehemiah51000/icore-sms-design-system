import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '../ui/Button/Button';
import { Card, CardHeader, CardBody } from '../ui/Card/Card';

export function ToastPage() {
  return (
    <div className='min-h-screen bg-bg-base text-text-main p-4 sm:p-8'>
      <header className='mb-6'>
        <Link
          to='/'
          className='text-xs font-medium text-navy-400 hover:underline'>
          ← Back Home
        </Link>
        <h1 className='text-xl sm:text-2xl font-bold mt-1'>Toast</h1>
        <p className='text-sm text-text-muted mt-1'>
          Powered by Sonner, themed to match the design system.
        </p>
      </header>

      <div className='space-y-6 max-w-2xl'>
        <Card>
          <CardHeader>
            <span className='text-xs font-semibold uppercase text-text-muted'>
              Basic types
            </span>
          </CardHeader>
          <CardBody className='flex flex-wrap gap-3'>
            <Button
              variant='secondary'
              onClick={() => toast.success('Credit loaded successfully.')}>
              Success
            </Button>
            <Button
              variant='secondary'
              onClick={() => toast.error('Payment failed. Please try again.')}>
              Error
            </Button>
            <Button
              variant='secondary'
              onClick={() =>
                toast.warning("This client's balance is running low.")
              }>
              Warning
            </Button>
            <Button
              variant='secondary'
              onClick={() => toast.info('STK push sent to 254791381097.')}>
              Info
            </Button>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <span className='text-xs font-semibold uppercase text-text-muted'>
              With description
            </span>
          </CardHeader>
          <CardBody className='flex flex-wrap gap-3'>
            <Button
              variant='secondary'
              onClick={() =>
                toast.success('Transaction complete', {
                  description: 'TXN-1042 · 50 credits loaded to TestUserNesh',
                })
              }>
              Success with detail
            </Button>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <span className='text-xs font-semibold uppercase text-text-muted'>
              Loading → resolved (real usage pattern)
            </span>
          </CardHeader>
          <CardBody className='flex flex-wrap gap-3'>
            <Button
              variant='primary'
              onClick={() => {
                const id = toast.loading('Sending STK push...');
                setTimeout(() => {
                  toast.success('Payment confirmed. Loading credit...', { id });
                }, 1500);
                setTimeout(() => {
                  toast.success('Credit loaded successfully.', { id });
                }, 3000);
              }}>
              Simulate load-credit flow
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
