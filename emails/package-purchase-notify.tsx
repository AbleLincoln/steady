import { Section, Text } from '@react-email/components'

interface EmailPropTypes {
  customer: {
    name: string
    email: string
  }
  questions: {
    label: string
    value: string
  }[]
  productVersion: string
  price: number
}

export default function Email({
  customer,
  questions,
  productVersion,
  price,
}: EmailPropTypes) {
  const answers = questions.map(({ label, value }) => (
    <li key={label}>
      <strong>{label}</strong>: {value}
    </li>
  ))

  return (
    <Section>
      <Text>
        {customer.name} purchased a Level Up Package{' '}
        {productVersion ? `(${productVersion})` : ''} for ${price / 100}.
      </Text>
      <ul>
        <li>
          <strong>Email:</strong> {customer.email}
        </li>
        {answers}
      </ul>
    </Section>
  )
}
