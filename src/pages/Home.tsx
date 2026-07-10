import { Phone } from 'lucide-react';
import { PreviewCard } from '../gallery/PreviewCard';
import { Button } from '../ui/Button/Button';
import { ThemeToggle } from '../ui/ThemeToggle/ThemeToggle';
import { Input } from '../ui/Input/Input';

export function Home() {
  return (
    <div className='min-h-screen bg-bg-base text-text-main transition-colors duration-200'>
      <header className='px-4 py-4 sm:px-8 sm:py-6 flex items-center justify-between bg-bg-surface border-b border-border-main'>
        <div className='flex items-center gap-3'>
          <img
            src='/ic_frame_2.svg'
            alt='ICORE'
            className='h-9 w-9 rounded-lg bg-navy-500'
          />
          <div>
            <h1 className='text-lg sm:text-xl font-semibold text-text-main'>
              ICORE Design System
            </h1>
            <p className='text-xs text-text-muted'>
              Shared components for the Admin Dashboard and Client Portal
            </p>
          </div>
        </div>
        <ThemeToggle />
      </header>

      <main className='px-4 py-6 sm:px-8 sm:py-8'>
        <section>
          <h2 className='text-sm font-semibold text-text-muted uppercase tracking-wide mb-3'>
            Foundations
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'>
            <PreviewCard
              title='Colors'
              status='stable'
              description='Navy, Red, Muted, Ink + status colors'
              to='/colors'
              preview={
                <div className='flex gap-1.5'>
                  <div className='h-8 w-8 rounded-full bg-navy-500' />
                  <div className='h-8 w-8 rounded-full bg-red-500' />
                  <div className='h-8 w-8 rounded-full bg-muted-500' />
                  <div className='h-8 w-8 rounded-full bg-ink-500' />
                </div>
              }
            />
            <PreviewCard
              title='Typography'
              status='wip'
              description='Type scale, weights, and usage'
              to='/typography'
              preview={
                <span className='text-lg font-semibold text-text-main'>Aa</span>
              }
            />
          </div>

          <h2 className='text-sm font-semibold text-text-muted uppercase tracking-wide mb-3'>
            Components
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <PreviewCard
              title='Button'
              status='stable'
              description='Primary, secondary, destructive, ghost variants'
              to='/button'
              preview={
                <Button variant='primary' size='sm'>
                  Load Credit
                </Button>
              }
            />

            <PreviewCard
              title='Input'
              status='stable'
              description='Text input with label, error, hint, icon slots'
              to='/input'
              preview={
                <Input
                  placeholder='2547XXXXXXXX'
                  leftIcon={<Phone className='h-4 w-4' />}
                  className='max-w-45'
                />
              }
            />
          </div>
        </section>
      </main>
    </div>
  );
}
