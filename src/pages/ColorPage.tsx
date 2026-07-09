import { Link } from 'react-router-dom';
import { colors } from '../tokens/colors'; // adjusting paths based on project root

export function ColorsPage() {
  return (
    <div className='min-h-screen bg-bg-base text-text-main p-4 sm:p-8'>
      <header className='mb-6 flex items-center justify-between'>
        <div>
          <Link
            to='/'
            className='text-xs font-medium text-navy-400 hover:underline'>
            ← Back Home
          </Link>
          <h1 className='text-xl sm:text-2xl font-bold mt-1'>
            Design System Color Palette
          </h1>
        </div>
      </header>

      <div className='space-y-8 max-w-4xl'>
        {Object.entries(colors).map(([groupName, values]) => {
          if (typeof values === 'string') return null;
          return (
            <div
              key={groupName}
              className='bg-bg-surface p-4 rounded-xl border border-border-main shadow-xs'>
              <h2 className='text-xs font-semibold uppercase tracking-wider text-text-muted mb-3'>
                {groupName}
              </h2>
              <div className='grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-9 gap-3'>
                {Object.entries(values).map(([weight, hex]) => (
                  <div key={weight} className='flex flex-col gap-1.5'>
                    <div
                      className='h-12 w-full rounded-md shadow-inner border border-black/5'
                      style={{ backgroundColor: hex }}
                    />
                    <div className='text-xs'>
                      <div className='font-semibold'>{weight}</div>
                      <div className='text-text-muted font-mono text-[10px] uppercase'>
                        {hex}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
