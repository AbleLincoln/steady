import Header from '../_header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="wrapper pt-28">{children}</main>
    </>
  )
}
