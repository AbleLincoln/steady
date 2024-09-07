import Header from '../_header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen pt-20">
      <Header />
      <main className="wrapper h-full bg-steady-green text-center">
        {children}
      </main>
    </div>
  )
}
