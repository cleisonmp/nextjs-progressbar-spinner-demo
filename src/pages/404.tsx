import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <main className="flex flex-col items-center max-w-3xl mx-auto px-2 min-w-[320px] gap-20 grow w-full">
        <h1 className="text-gray-300 font-bold text-2xl mt-20">
          Ooops! The page you&apos;re looking for was not found
        </h1>
        <Link href="/">
          <div className="group bg-gray-800 text-center rounded-full p-4 w-1/2 mx-auto text-lg font-bold cursor-pointer hover:brightness-110 transition-all">
            <a className="group-hover:underline">Return Home</a>
          </div>
        </Link>
      </main>
    </>
  )
}
