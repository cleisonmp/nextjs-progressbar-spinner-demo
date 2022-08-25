import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nextjs ProgressBar Spinner</title>
        <meta name="description" content="" />
      </Head>

      <main className="flex flex-col max-w-5xl mt-5 mx-auto w-full px-8 min-w-[320px] flex-1 gap-5 mb-3">
        <section className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold">
            Welcome to Nextjs ProgressBar Spinner demo
          </h1>
          <div className="mt-5">
            Install
            <pre className="bg-gray-800 w-fit p-4 rounded mt-2">
              npm i nextjs-progressbar-spinner
            </pre>
          </div>
        </section>
        <section className="flex flex-col min-w-[20rem] gap-3">
          Usage example
          <pre className="bg-gray-800 p-4 rounded overflow-auto text-sm">
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
