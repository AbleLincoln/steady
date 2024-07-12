import Plan, { type PlanProps } from '@/app/_components/plan'

const PLANS: PlanProps[] = [
  {
    title: 'Quick Fix',
    subtitle: '10 minutes of messaging',
    url: 'https://calendly.com/steady-coaches/10-mins-messaging',
    price: 35,
    bestFor: 'Best for straight-forward questions',
    examples: [
      'How to respond to that text',
      'Flagging red flags',
      'Yes / no on a second date',
      'Online profile optimization',
    ],
  },
  {
    title: 'Support & Advice',
    subtitle: '60 minute video session',
    url: 'https://calendly.com/steady-coaches/support-and-advice',
    price: 190,
    bestFor: 'For more in-depth help like',
    examples: [
      'Defining your ideal partner',
      'Tips for using the apps',
      'Dating anxiety help',
      'Break-up support',
    ],
  },
  {
    title: 'Level Up Package',
    subtitle: 'Five 60 minute sessions to transform your dating life ',
    supertitle: 'Coming Soon! ',
    // url: 'https://calendly.com/steady-coaches/level-up',
    // price: 345,
    bestFor: 'For a holistic dating reset',
    examples: [
      'Uncover limiting beliefs',
      'Break negative patterns',
      'Rewrite your dating story',
      'Create a new dating plan',
    ],
  },
]

export default function Plans() {
  return (
    <div className="mx-auto max-w-[1280px] grid-cols-3 gap-x-10 pt-8 md:grid">
      {PLANS.map((props) => (
        <Plan key={props.title} {...props} />
      ))}
    </div>
  )
}
