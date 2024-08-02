import Header from '../_header'

export default function ConfirmationPage() {
  return (
    <>
      <Header />

      <main className="wrapper m-auto max-w-screen-md pt-36 text-center">
        <h1 className="mb-4 text-3xl text-steady-green">
          Thank you for purchasing your 5 session{' '}
          <strong>Level Up Package</strong>
        </h1>
        <p className="mb-4">
          Your coach will reach out to you directly via email to offer their
          availability for your first session. We look forward to working with
          you. Should you have any questions please reach out to{' '}
          <a
            href="mailto:Lindsay@steadydatecoaching.com"
            className="text-steady-pink hover:underline"
          >
            lindsay@steadydatecoaching.com
          </a>
        </p>

        <p className="mt-8 text-left opacity-50">
          (this won't appear on the live site)
          <br /> Lindsay: this would be a great place to put link to content
          such as How To Prepare For Your Date Coach Session or something...
        </p>
      </main>
    </>
  )
}
