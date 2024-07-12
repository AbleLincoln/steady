export default function MagicLinkSent() {
  return (
    <main className="bg-gradient flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-purple-steady px-6">
      <div className="max-w-screen-sm rounded-xl bg-cream p-8 text-center text-lg shadow-xl">
        <p className="mb-4">
          Since this is your first time using Steady we sent you a confirmation
          link to make sure it&apos;s really you.
        </p>
        <p>
          Please check your email for a message from{' '}
          <span className="font-medium text-steady-pink">
            hello@steadydatecoaching.com
          </span>{' '}
          to login to your session.
        </p>
      </div>
    </main>
  )
}
