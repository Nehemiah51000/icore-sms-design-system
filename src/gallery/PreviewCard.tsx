import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter } from '../ui/Card/Card';

interface PreviewCardProps {
  title: string;
  status?: 'stable' | 'new' | 'wip';
  description: string;
  to: string;
  preview: React.ReactNode;
}

const statusStyles = {
  stable: 'bg-success-500/10 text-success-600',
  new: 'bg-navy-500/10 text-navy-500',
  wip: 'bg-warning-500/10 text-warning-600',
};

export function PreviewCard({
  title,
  status = 'stable',
  description,
  to,
  preview,
}: PreviewCardProps) {
  return (
    <Card>
      <CardHeader className='flex items-center justify-between'>
        <span className='font-medium text-ink-700 text-sm'>{title}</span>
        <span
          className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusStyles[status]}`}>
          {status}
        </span>
      </CardHeader>

      <CardBody className='flex items-center justify-center bg-muted-100 min-h-24'>
        {preview}
      </CardBody>

      <CardFooter className='flex items-center justify-between'>
        <p className='text-xs text-muted-500 pr-2'>{description}</p>
        <Link
          to={to}
          className='text-xs font-medium text-navy-500 hover:text-navy-600 whitespace-nowrap'>
          View →
        </Link>
      </CardFooter>
    </Card>
  );
}
