import { env } from '@/env'
import resend from '@/server/resend'
import stripe from '@/server/stripe'
import PurchaseNotifyEmail from 'emails/package-purchase-notify'
import Header from '../_header'

async function sendConfirmationEmailToLindsay(checkoutSessionId: string) {
  console.log('sending... for', checkoutSessionId)

  // get stripe checkout info
  try {
    // Retrieve the checkout session by its ID
    const session = await stripe.checkout.sessions.retrieve(checkoutSessionId)

    // we need:
    // customer name, email
    const customer = {
      name: session.customer_details?.name ?? '',
      email: session.customer_details?.email ?? '',
    }

    // answers to custom questions
    const customQuestions = session.custom_fields.map((field) => ({
      label: field.label.custom ?? '', // Custom field label (if available)
      value: field.text?.value ?? '', // Value selected or entered by the customer
    }))

    // what version (nickname) they booked
    const lineItems =
      await stripe.checkout.sessions.listLineItems(checkoutSessionId)
    const productVersion = lineItems.data[0]?.price?.nickname ?? ''

    // send confirmation to email
    return resend.emails.send({
      from: env.EMAIL_FROM,
      to: 'lindsay@steadydatecoaching.com',
      subject: 'New Level Up Package Purchase',
      react: (
        <PurchaseNotifyEmail
          productVersion={productVersion}
          price={session.amount_total ?? 0}
          customer={customer}
          questions={customQuestions}
        />
      ),
    })
  } catch (error) {
    console.error('Error retrieving payment information:', error)
    throw error
  }
}

export default function ConfirmationPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  // run server action
  void sendConfirmationEmailToLindsay((searchParams.checkout as string) ?? '')

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
      </main>
    </>
  )
}
