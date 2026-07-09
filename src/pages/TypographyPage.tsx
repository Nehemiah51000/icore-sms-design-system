import { Link } from 'react-router-dom';
import { typography } from '../tokens/typography';

export function TypographyPage() {
  return (
    <div className='min-h-screen bg-bg-base text-text-main p-4 sm:p-8'>
      <header className='mb-6'>
        <Link
          to='/'
          className='text-xs font-medium text-navy-400 hover:underline'>
          ← Back Home
        </Link>
        <h1 className='text-xl sm:text-2xl font-bold mt-1'>
          Typography System
        </h1>
      </header>

      <div className='bg-bg-surface p-4 sm:p-6 rounded-xl border border-border-main space-y-6 max-w-4xl'>
        <div>
          <h3 className='text-xs font-semibold uppercase text-text-muted mb-2'>
            Font Family Definition
          </h3>
          <p className='p-3 bg-bg-base rounded-md font-mono text-xs break-all'>
            {typography.fontFamily}
          </p>
        </div>

        <hr className='border-border-main' />

        <div>
          <h3 className='text-xs font-semibold uppercase text-text-muted mb-4'>
            Type Scale Sample
          </h3>
          <div className='space-y-4'>
            {Object.entries(typography.scale).map(([sizeKey, value]) => (
              <div
                key={sizeKey}
                className='flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-border-main/50 pb-3'>
                <div className='text-xs font-mono text-text-muted w-24'>
                  {sizeKey} ({value})
                </div>
                <div
                  className='flex-1 text-text-main'
                  style={{ fontSize: value }}>
                  The quick brown fox jumps over the lazy dog.
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
