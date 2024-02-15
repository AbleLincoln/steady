'use server'

import { redirect } from 'next/navigation'

export default async function submitReservationForm(formData: FormData) {
  const firstName = formData.get('firstname') as string
  const lastName = formData.get('lastname') as string
  const email = formData.get('email') as string
  // const phone = formData.get('phone')
  // const plan = formData.get('plan')

  const calendelyUrl = `https://calendly.com/steadydatecoaching/30min?name=${firstName}%20${lastName}&email=${email}`
  // console.log('redirecting to', calendelyUrl)
  // redirect(calendelyUrl)
}
