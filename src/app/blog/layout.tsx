import Link from 'next/link'
import Footer from '../_footer'
import Header from '../_header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="wrapper min-h-screen pt-10 sm:pt-28">{children}</main>
      <Footer />
    </>
  )
}
