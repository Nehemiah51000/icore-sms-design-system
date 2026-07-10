import { Link } from 'react-router-dom';
import { LayoutDashboard, Users, Building2, Receipt } from 'lucide-react';
import { AppShell } from '../layout/AppShell/AppShell';
import { Card, CardHeader, CardBody } from '../ui/Card/Card';

const demoLinks = [
  {
    to: '/appshell',
    label: 'Dashboard',
    icon: <LayoutDashboard className='h-4 w-4' />,
  },
  {
    to: '/appshell/clients',
    label: 'Clients',
    icon: <Users className='h-4 w-4' />,
  },
  {
    to: '/appshell/providers',
    label: 'Providers',
    icon: <Building2 className='h-4 w-4' />,
  },
  {
    to: '/appshell/transactions',
    label: 'Transactions',
    icon: <Receipt className='h-4 w-4' />,
  },
];

export function AppShellPage() {
  return (
    <AppShell links={demoLinks} title='Dashboard'>
      <Link
        to='/'
        className='text-xs font-medium text-navy-400 hover:underline mb-4 inline-block'>
        ← Back to gallery Home
      </Link>

      <Card>
        <CardHeader>
          <span className='text-xs font-semibold uppercase text-text-muted'>
            AppShell live preview
          </span>
        </CardHeader>
        <CardBody>
          <p className='text-sm text-text-main'>
            This whole page — sidebar, top bar, content area — is{' '}
            <code>AppShell</code> wrapping this content. Resize your browser
            below the desktop breakpoint to see the sidebar collapse into the
            mobile menu button.
          </p>
        </CardBody>
      </Card>
    </AppShell>
  );
}
