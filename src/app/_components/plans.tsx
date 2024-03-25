import Plan, { type PlanProps } from '@/app/_components/plan'

const PLANS: PlanProps[] = [
  {
    url: 'https://calendly.com/steady-coaches/10-mins-messaging',
    time: 10,
    price: 20,
    bestFor: 'straight-forward dating questions ',
    examples: [
      'What does this text mean?',
      'How do I know if we are exclusive?',
      'I’m getting mixed signals. Are they interested?',
    ],
  },
  {
    url: 'https://calendly.com/steady-coaches/15-mins-messaging',
    time: 15,
    price: 30,
    bestFor: 'situational dating advice with minimal backstory',
    examples: [
      'Is this a red flag?',
      'How do I know if someone deserves a second date?',
      'How can I tell if they are interested?',
    ],
  },
  {
    url: 'https://calendly.com/steady-coaches/20-mins-messaging',
    time: 20,
    price: 35,
    bestFor: 'more backstory required or profile optimization',
    examples: [
      'Help making my online profile more successful',
      'How to feel better after a dating rejection',
      'Help. We had a fight ',
    ],
  },
]

export default function Plans() {
  return (
    <div className="justify-between pt-8 md:flex">
      {PLANS.map(({ time, price, bestFor, examples, url }) => (
        <Plan
          key={time}
          url={url}
          time={time}
          price={price}
          bestFor={bestFor}
          examples={examples}
        />
      ))}
    </div>
  )
}
