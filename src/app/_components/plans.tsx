import Plan, { type PlanProps } from '@/app/_components/plan'

const PLANS: PlanProps[] = [
  {
    title: 'Quick Fix',
    subtitle: '10 minutes of messaging',
    url: 'https://calendly.com/steady-coaches/10-mins-messaging',
    price: 45,
    bestFor: 'straight-forward dating questions',
    examples: [
      'How do I respond to this text?',
      'Should I go on a second date with this person?',
      'My dating profile needs a refresh. Can you help?',
    ],
  },
  {
    title: 'Support & Advice',
    subtitle: '50 minute video call',
    url: 'https://calendly.com/steady-coaches/support-and-advice',
    price: 250,
    bestFor: 'situational dating advice with minimal backstory',
    examples: [
      'Help, I’m feeling anxious in my relationship',
      'I’m not getting second dates, what am I doing wrong?',
      'Is this a red flag?',
    ],
  },
  {
    title: 'Level Up',
    subtitle: '80 minute video call',
    url: 'https://calendly.com/steady-coaches/level-up',
    price: 345,
    bestFor: 'more holistic dating or relationship advice',
    examples: [
      'I haven’t dated in 20 years. I need a full plan',
      'I need help getting through a break-up',
      'What should I do if the apps aren’t working for me?',
    ],
  },
]

export default function Plans() {
  return (
    <div className="grid-cols-3 gap-x-10 pt-8 md:grid">
      {PLANS.map(({ title, subtitle, price, bestFor, examples, url }) => (
        <Plan
          title={title}
          subtitle={subtitle}
          key={title}
          url={url}
          price={price}
          bestFor={bestFor}
          examples={examples}
        />
      ))}
    </div>
  )
}
