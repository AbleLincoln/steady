interface EmailPropTypes {
  meetingUrl: string
}

// TODO: https://react.email/docs/introduction

export default function Email({ meetingUrl }: EmailPropTypes) {
  return (
    <main>
      <header style={{ backgroundColor: 'rgb(38, 166, 87)' }}>
        <h1>Steady</h1>
      </header>
      <p>Your date coaching session has been scheduled!</p>
      <p>
        Link to your meeting: <a href={meetingUrl}>{meetingUrl}</a>
      </p>
    </main>
  )
}
