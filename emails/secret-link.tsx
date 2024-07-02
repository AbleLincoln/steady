import config from '@/../tailwind.config'
import {
  Body,
  Button,
  Container,
  Html,
  Img,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://steadydatecoaching.com'

function formatName(name: string) {
  return name.split(' ')[0] ?? ''
}

interface EmailPropTypes {
  name: string
  meetingUrl: string
}

export default function Email({
  name = 'Friend',
  meetingUrl = 'https://steadydatecoaching.com/chat',
}: EmailPropTypes) {
  return (
    <Html>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                ...config.theme.extend.colors,
              },
            },
          },
        }}
      >
        <Body className="m-0 p-0">
          <Container
            className="px-6 py-6 font-sans"
            // style={{
            //   minHeight: '100%',
            //   background: 'linear-gradient(white 70%, rgb(143, 148, 239))',
            // }}
          >
            <Section className="text-right">
              <Img
                alt="Steady"
                src={`${baseUrl}/steady-logo-green.png`}
                className="inline-block"
                width={80}
              />
            </Section>
            <Section>
              <Text className="mb-6 mt-6 font-sans text-3xl font-light">
                {formatName(name)},
              </Text>
              <Text className="text-3xl font-light">
                Thanks for scheduling some time with Steady.
              </Text>
              <Text className="text-xl font-light">
                Here is the secure link to your chat session.
              </Text>
            </Section>
            <Section className="text-center">
              <Button
                href={meetingUrl}
                className="m-auto mt-1 w-3/4 rounded-full bg-steady-pink px-6 py-2 text-center text-white"
              >
                Secure Link
              </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
