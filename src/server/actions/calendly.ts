'use server'

export async function getEventDetails(email: string) {
  const uri = new URL('https://api.calendly.com/scheduled_events')

  uri.searchParams.append(
    'organization',
    'https://api.calendly.com/organizations/17fe8406-f01c-4007-ab73-3fdef0c24dd3',
  )

  uri.searchParams.append('invitee', email)

  console.log(uri.href)

  // const res = await fetch()
}
