import Header from '@/app/_header'

import Accordion, { type AccordionItem } from './_accordion'

// TODO: CMS would be cool
const FAQs: AccordionItem[] = [
  {
    title: 'What kind of coaching can I expect to receive?',
    body: 'Our coaches give practical advice for healthy dating. That can include everything from how to get the dating and relationship experience you desire and setting boundaries to tips for a better online profile, help decoding text messages and navigating the IRL world of speed dating and meetups.',
  },
  {
    title:
      'Are the coaches real people or AI bots on a mind control mission to erase humanity?',
    body: 'All of our coaches are real, live people who answer every question personally. ChatGPT knows nothing about love.',
  },
  {
    title: 'Who are the coaches?',
    body: 'All coaches are dating and relationship experts with psychology, matchmaking or counseling backgrounds who have worked in the date coaching space for years.',
  },
  {
    title: 'How much does it cost?',
    body: 'Pricing varies depending on the length of the session and mode of communication. Please click the session you are interested in to view pricing info.',
  },
  {
    title: 'Will you be offering video and phone options?',
    body: 'Yes! Right now, everything is chat based. But soon we will be introducing video-based meetings and live phone calls.',
  },
  {
    title: 'Is this like therapy?',
    body: 'While it may be therapeutic, Steady is coaching. We’re here as a sounding board, to give advice, help interpret situations and brush up on some dating skills. If you feel you need deeper emotional support, you should contact a professional licensed therapist.',
  },
]

export default function FAQ() {
  return (
    <>
      <Header />
      <main className="wrapper pt-36">
        <h1 className="text-4xl text-steady-green">
          Frequently Asked Questions
        </h1>

        <Accordion items={FAQs} />
      </main>
    </>
  )
}
