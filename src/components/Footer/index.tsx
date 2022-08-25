import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="flex items-center justify-center border-t border-gray-700 mb-3 h-9 pt-1">
      <Link href={'https://github.com/cleisonmp'}>
        <a className="flex items-center justify-center">
          <Image src="/github.svg" alt="" width={32} height={32} />
        </a>
      </Link>
    </footer>
  )
}
