import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableEmpty,
  TableSkeleton,
} from '../ui/Table/Table';
import { Pagination } from '../ui/Pagination/Pagination';
import { StatusBadge } from '../ui/StatusBadge/StatusBadge';
import { Card, CardHeader, CardBody } from '../ui/Card/Card';

const mockTransactions = [
  {
    id: 'TXN-1042',
    client: 'TestUserNesh',
    provider: 'HostPinnacle',
    amount: 'KES 50',
    status: 'success' as const,
  },
  {
    id: 'TXN-1043',
    client: 'Dream World Destinations',
    provider: 'Advanta',
    amount: 'KES 20',
    status: 'error' as const,
  },
  {
    id: 'TXN-1044',
    client: 'PROFEEDS',
    provider: 'Zettatel',
    amount: 'KES 100',
    status: 'pending' as const,
  },
];

export function TablePage() {
  const [page, setPage] = useState(1);
  const [loading] = useState(false);

  return (
    <div className='min-h-screen bg-bg-base text-text-main p-4 sm:p-8'>
      <header className='mb-6'>
        <Link
          to='/'
          className='text-xs font-medium text-navy-400 hover:underline'>
          ← Back Home
        </Link>
        <h1 className='text-xl sm:text-2xl font-bold mt-1'>Table</h1>
        <p className='text-sm text-text-muted mt-1'>
          Horizontal-scroll on mobile, composable cells, built-in loading and
          empty states.
        </p>
      </header>

      <div className='space-y-6 max-w-4xl'>
        <Card>
          <CardHeader>
            <span className='text-xs font-semibold uppercase text-text-muted'>
              Real usage — transaction log
            </span>
          </CardHeader>
          <CardBody className='p-0'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Provider</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableSkeleton rows={3} columns={5} />
                ) : mockTransactions.length === 0 ? (
                  <TableEmpty colSpan={5}>No transactions yet.</TableEmpty>
                ) : (
                  mockTransactions.map((t) => (
                    <TableRow key={t.id}>
                      <TableCell className='font-medium'>{t.id}</TableCell>
                      <TableCell>{t.client}</TableCell>
                      <TableCell>{t.provider}</TableCell>
                      <TableCell>{t.amount}</TableCell>
                      <TableCell>
                        <StatusBadge status={t.status}>{t.status}</StatusBadge>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
            <Pagination
              currentPage={page}
              lastPage={4}
              total={87}
              perPage={25}
              onPageChange={setPage}
            />
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <span className='text-xs font-semibold uppercase text-text-muted'>
              Loading state
            </span>
          </CardHeader>
          <CardBody className='p-0'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableSkeleton rows={3} columns={3} />
              </TableBody>
            </Table>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <span className='text-xs font-semibold uppercase text-text-muted'>
              Empty state
            </span>
          </CardHeader>
          <CardBody className='p-0'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableEmpty colSpan={3}>
                  No transactions match your filters.
                </TableEmpty>
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
