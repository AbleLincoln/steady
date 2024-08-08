import Link from 'next/link'
import Footer from '../_footer'
import Header from '../_header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <h1 className="wrapper inset-x-0 z-40 pt-14 text-4xl font-thin sm:absolute sm:pt-3 sm:text-center">
        <Link href="/blog">Blog</Link>
      </h1>
      <main className="wrapper min-h-screen pt-10 sm:pt-28">{children}</main>
      <Footer />
    </>
  )
}
