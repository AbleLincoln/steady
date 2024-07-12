import Header from '@/app/_header'

export default function Terms() {
  return (
    <>
      <Header />

      <main className="wrapper max-w-screen-md pt-36">
        <h1 className="mb-4 text-3xl text-steady-green">
          Our Terms and Conditions
        </h1>
        <p className="mb-4">
          Steady coaches are not, nor are we holding ourselves to be
          psychologists, psychiatrists, social workers, or other mental health
          professionals. Although our website and other marketing and
          promotional materials (our “Content”) and services include information
          relating to relationships, personal growth, and several other topics,
          our Content and services are not to be relied upon in any way as
          mental health advice and are not intended to be a substitute for
          professional mental health advice, diagnosis, or treatment.{' '}
        </p>

        <p className="mb-4">
          Do not use our Content or services in lieu of professional advice
          given by qualified mental health professionals. Always seek the advice
          of your own mental health provider regarding any questions or concerns
          you have about your specific health. We are not giving medical,
          psychological, or mental health advice whatsoever via our Content or
          services.
        </p>

        <p className="mb-4">
          You acknowledge that you are voluntarily consuming our services and
          Content and are personally responsible for your choices, actions, and
          results. You acknowledge and agree that Steady makes no guarantees as
          to the specific outcome or results you can expect from our Content and
          services.
        </p>
      </main>
    </>
  )
}
