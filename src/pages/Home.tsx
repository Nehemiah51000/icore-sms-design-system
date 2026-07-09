import { PreviewCard } from '../gallery/PreviewCard';

export function Home() {
  return (
    <div className='min-h-screen bg-muted-100'>
      <header className='px-4 py-4 sm:px-8 sm:py-6 flex items-center gap-3 bg-white border-b border-muted-200'>
        <img src='/ic_frame_2.svg' alt='ICORE' className='h-9 w-9 rounded-lg' />
        <div>
          <h1 className='text-lg sm:text-xl font-semibold text-ink-700'>
            ICORE Design System
          </h1>
          <p className='text-xs text-muted-500'>
            Shared components for the Admin Dashboard and Client Portal
          </p>
        </div>
      </header>

      <main className='px-4 py-6 sm:px-8 sm:py-8'>
        <section>
          <h2 className='text-sm font-semibold text-muted-600 uppercase tracking-wide mb-3'>
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
                <span className='text-lg font-semibold text-ink-700'>Aa</span>
              }
            />
          </div>

          <h2 className='text-sm font-semibold text-muted-600 uppercase tracking-wide mb-3'>
            Components
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <PreviewCard
              title='Button'
              status='wip'
              description='Primary, secondary, destructive, ghost variants'
              to='/button'
              preview={
                <button className='bg-navy-500 text-white text-sm px-3 py-1.5 rounded-lg'>
                  Load Credit
                </button>
              }
            />
            {/* More PreviewCard entries get added here as each component is built */}
          </div>
        </section>
      </main>
    </div>
  );
}
