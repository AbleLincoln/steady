'use client'

import { useState } from 'react'

const PLANS = [
  {
    id: 'quick-fix',
    title: 'Quick Fix',
    subtitle: '10 minutes of instant messaging with a dating expert',
    description: [
      'Best for straight-forward dating questions like:',
      [
        'Who should pay on the first date?',
        'What are some good questions to ask on a first date?',
        'How do I know if they are interested?',
      ],
    ].map(formatDescription),
  },
  {
    id: 'depper-convo',
    title: 'Deeper Convo',
    subtitle: '25 minute phone call with a dating expert',
    description: [
      'Best for situational dating advice with some backstory.',
      [
        'Discover what you are truly looking for in a mate',
        'Set boundaries in your current relationship',
        'Identify red (or green!) flags',
      ],
    ].map(formatDescription),
  },
  {
    id: 'real-talk',
    title: 'Real Talk',
    subtitle: '50 minute video call with a dating expert',
    description: [
      'Best for more holistic dating or relationship advice, such as:',
      [
        'I haven’t dated in 20 years. I need a full plan',
        'Why do I keep picking the person who is unavailable?',
        'Am I ready for marriage? Are they the one?',
      ],
    ].map(formatDescription),
  },
]

// TODO: this might be overkill
function formatDescription(text: (string | string[])[] | string = '') {
  if (typeof text === 'string') return text
  else
    return (
      <ul className="list-disc pl-4" key={'first'}>
        {text.map((t, i) => (
          <li key={i} className="mt-3">
            {formatDescription(t)}
          </li>
        ))}
      </ul>
    )
}

export default function PlanPicker() {
  const [activePlan, setActivePlan] = useState(0)

  const options = PLANS.map(({ id, title }, i) => (
    <li
      className={`text-dark mb-2 cursor-pointer bg-beige px-5 py-3 text-xl transition-colors first:rounded-t-lg last:mb-0 last:rounded-b-lg ${i === activePlan && 'bg-pink-steady text-white'}`}
      onClick={() => setActivePlan(i)}
      onMouseOver={() => setActivePlan(i)}
      key={id}
    >
      {title}
    </li>
  ))

  const subtitle = PLANS[activePlan]?.subtitle
  const description = PLANS[activePlan]?.description

  return (
    <div className="p-10">
      <ul className="mb-8 max-w-xs">{options}</ul>
      <p className="mb-4 text-pink-steady">{subtitle}</p>
      {description}
    </div>
  )
}
