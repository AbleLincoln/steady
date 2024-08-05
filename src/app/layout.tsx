import '@/styles/globals.css'
import { TRPCReactProvider } from '@/trpc/react'
import { GoogleAnalytics } from '@next/third-parties/google'
import localFont from 'next/font/local'

const styreneA = localFont({
  // TODO: font display: https://nextjs.org/docs/app/api-reference/components/font#display
  src: [
    {
      path: './fonts/StyreneALC-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/StyreneALC-ThinItalic.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: './fonts/StyreneALC-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/StyreneALC-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/StyreneALC-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/StyreneALC-RegularItalic.otf',
      weight: '400',
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
      path: './fonts/StyreneALC-Black.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/StyreneALC-BlackItalic.otf',
      weight: '800',
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
        id="root"
      >
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>

      <GoogleAnalytics gaId="G-RY1RZYDFQR" />
    </html>
  )
}
