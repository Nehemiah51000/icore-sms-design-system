import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { Modal } from '../ui/Modal/Modal';
import { Button } from '../ui/Button/Button';
import { Card, CardHeader, CardBody } from '../ui/Card/Card';

export function ModalPage() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);

  function handleDelete() {
    setDeleting(true);
    setTimeout(() => {
      setDeleting(false);
      setConfirmOpen(false);
    }, 1200);
  }

  return (
    <div className='min-h-screen bg-bg-base text-text-main p-4 sm:p-8'>
      <header className='mb-6'>
        <Link
          to='/'
          className='text-xs font-medium text-navy-400 hover:underline'>
          ← Back Home
        </Link>
        <h1 className='text-xl sm:text-2xl font-bold mt-1'>Modal</h1>
        <p className='text-sm text-text-muted mt-1'>
          Built on native &lt;dialog&gt; — free focus trap, Escape-to-close,
          backdrop click.
        </p>
      </header>

      <div className='space-y-6 max-w-2xl'>
        <Card>
          <CardHeader>
            <span className='text-xs font-semibold uppercase text-text-muted'>
              Basic
            </span>
          </CardHeader>
          <CardBody>
            <Button onClick={() => setBasicOpen(true)}>Open Modal</Button>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <span className='text-xs font-semibold uppercase text-text-muted'>
              Real usage — destructive confirmation
            </span>
          </CardHeader>
          <CardBody>
            <Button variant='destructive' onClick={() => setConfirmOpen(true)}>
              <Trash2 className='h-4 w-4' /> Delete Client
            </Button>
          </CardBody>
        </Card>
      </div>

      <Modal
        open={basicOpen}
        onClose={() => setBasicOpen(false)}
        title='Basic Modal'>
        <p className='text-sm text-text-main'>
          This is a basic modal with a title and body content only.
        </p>
      </Modal>

      <Modal
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        title='Delete this client?'
        size='sm'
        footer={
          <>
            <Button
              variant='secondary'
              onClick={() => setConfirmOpen(false)}
              disabled={deleting}>
              Cancel
            </Button>
            <Button
              variant='destructive'
              onClick={handleDelete}
              loading={deleting}>
              Delete
            </Button>
          </>
        }>
        <p className='text-sm text-text-main'>
          This will permanently remove <strong>TestUserNesh</strong> and cannot
          be undone. They still won't be deletable if they have existing
          transaction history.
        </p>
      </Modal>
    </div>
  );
}
