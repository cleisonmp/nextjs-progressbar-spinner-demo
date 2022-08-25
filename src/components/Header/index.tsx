import Image from 'next/image'
import { NextProgressbarSpinner } from 'nextjs-progressbar-spinner'

import { ActiveLink } from './ActiveLink'

export function Header() {
  // To avoid layout shifting set a container with a defined size for NextProgressbarSpinner
  return (
    <header className="h-20 border-b border-gray-800">
      <div className="flex items-center max-w-6xl mx-auto px-8 min-w-[320px] h-20 gap-10">
        <Image src="/NextjsLogo.svg" alt="" width={104} height={62} />
        <div className="flex w-8 h-8 items-center">
          <NextProgressbarSpinner
            NextNProgressProps={{
              color: '#61DCFB',
              progressBarVisibility: 'visible',
              startPosition: 0.3,
              stopDelayMs: 200,
              height: 1,
              showOnShallow: true,
              options: { showSpinner: false },
            }}
            spinnerType="CircleLoader"
            spinnerProps={{
              size: '2rem',
              color: '#61DCFB',
              // cssOverride: {},
              // speedMultiplier: 2.5,
              // height: 5,
              // width: 5,
              // radius: 5,
              // margin: 5,
            }}
          />
        </div>
        <nav className="flex gap-8 h-20 ">
          <ActiveLink title="Home" href="/" />

          <a
            href="https://github.com/cleisonmp/nextjs-progressbar-spinner-demo"
            target="_blank"
            className="flex flex-col justify-between text-gray-300 hover:text-white transition-colors"
            rel="author help noreferrer"
          >
            <span className="flex flex-1 items-center">Code</span>
          </a>

          <ActiveLink title="Fastload" href="/fast" />
          <ActiveLink title="Medium" href="/medium" />
          <ActiveLink title="Slow" href="/slow" />
        </nav>
      </div>
    </header>
  )
}
