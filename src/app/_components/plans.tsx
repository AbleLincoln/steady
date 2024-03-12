import Plan from '@/app/_components/plan'

const PLANS = [
  {
    time: '10 minutes',
    bestFor: 'straight-forward dating questions ',
    examples: [
      'What does this text mean?',
      'How do I know if we are exclusive?',
      'I’m getting mixed signals. Are they interested?',
    ],
  },
  {
    time: '15 minutes',
    bestFor: 'situational dating advice with some backstory',
    examples: [
      'How to identify what you are truly looking for in a partner',
      'How to set boundaries in a current relationship',
      'Is this a red flag?',
    ],
  },
  {
    time: '20 minutes',
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
      {PLANS.map(({ time, bestFor, examples }) => (
        <Plan key={time} time={time} bestFor={bestFor} examples={examples} />
      ))}
    </div>
  )
}
