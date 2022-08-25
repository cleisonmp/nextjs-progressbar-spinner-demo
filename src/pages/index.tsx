import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nextjs ProgressBar Spinner</title>
        <meta name="description" content="" />
      </Head>

      <main className="flex max-w-3xl mt-5 mx-auto w-full px-8 min-w-[320px] flex-1 gap-5 justify-between mb-3">
        <section className="flex flex-col text-sm gap-1">
          <h1 className="font-bold">Welcome to Nextjs ProgressBar Spinner</h1>
          <div className="flex gap-1 text-gray-300 text-xxs">
            Based on
            <a
              href={'https://github.com/apal21/nextjs-progressbar'}
              target="_blank"
              rel="help noreferrer"
              className="cursor-pointer underline"
            >
              Next.js Progressbar
            </a>
          </div>
          <div className="flex gap-1 text-gray-300 text-xxs">
            Included
            <a
              href={'https://github.com/davidhu2000/react-spinners'}
              target="_blank"
              rel="help noreferrer"
              className="cursor-pointer underline"
            >
              React Spinners
            </a>
            for a more flexible spinner usage
          </div>
          <div className="mt-5">
            Install
            <pre className="bg-gray-800 w-fit p-4 rounded text-xxs">
              npm i nextjs-progressbar-spinner
            </pre>
          </div>
        </section>
        <div className="border-r border-gray-800"></div>
        <section className="flex flex-col min-w-[20rem] gap-3">
          Usage example
          <pre className="bg-gray-800 p-4 rounded overflow-auto text-xxs">
            {`import { NextProgressbarSpinner } from 'nextjs-progressbar-spinner'
            
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
/>`}
          </pre>
        </section>
      </main>
    </>
  )
}

export default Home
