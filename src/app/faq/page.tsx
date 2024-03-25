import Header from '@/app/_header'

import Accordion, { type AccordionItem } from './_accordion'

// TODO: CMS would be cool
const FAQs: AccordionItem[] = [
  {
    title: 'What kind of coaching can I expect to receive?',
    body: 'Our coaches give practical advice to healthy dating.  This can include everything from decoding text messages, best practices for engaging on the apps and handling rejection all the way to getting started dating again after divorce and stopping unhealthy dating patterns.',
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
    body: 'While it may be more helpful to your dating life than therapy, Steady is coaching.  We focus on the present and future circumstances, providing insightful and actionable advice vs. therapy which usually focuses on your past and healing trauma. ',
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
