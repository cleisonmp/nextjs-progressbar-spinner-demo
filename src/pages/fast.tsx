import Head from 'next/head'

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
  return { props: {} }
}

export default function SlowPage() {
  return (
    <>
      <Head>
        <title>Nextjs ProgressBar Spinner</title>
        <meta name="description" content="" />
      </Head>

      <main className="flex max-w-3xl mt-20 mx-auto w-full px-8 min-w-[320px] flex-1">
        <div className="flex flex-col mb-20">
          <p>This page took at least 1 seconds to render</p>
        </div>
      </main>
    </>
  )
}
