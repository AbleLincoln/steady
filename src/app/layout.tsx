import '@/styles/globals.css'

import localFont from 'next/font/local'

import { TRPCReactProvider } from '@/trpc/react'

const styreneA = localFont({
  // TODO: font display: https://nextjs.org/docs/app/api-reference/components/font#display
  src: [
    {
      path: './fonts/StyreneALC-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/StyreneALC-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/StyreneALC-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/StyreneALC-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
  ],
  variable: '--font-styrene-a',
})

const styreneB = localFont({
  // TODO: font display: https://nextjs.org/docs/app/api-reference/components/font#display
  src: [
    {
      path: './fonts/StyreneBLC-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/StyreneBLC-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/StyreneBLC-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/StyreneBLC-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-styrene-b',
})

export const metadata = {
  title: 'Steady | Date Happy',
  description: 'Date Happy',
  icons: [{ rel: 'icon', url: '/favicon.png' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`bg-cream font-sans text-dark ${styreneB.variable} ${styreneA.variable}`}
      >
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  )
}
