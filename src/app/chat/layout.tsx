'use client'

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-purple-steady">
      <div className="m-auto max-w-screen-lg p-4">{children}</div>
    </main>
  )
}
