import {
  Html,
  Body,
  Section,
  Img,
  Text,
  Tailwind,
  Button,
  Hr,
  Row,
  Column,
  Container,
} from '@react-email/components'

import config from '@/../tailwind.config'
import { DateTime } from 'luxon'

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://steadydatecoaching.com'

function formatName(name: string) {
  return name.split(' ')[0] ?? ''
}

function formatDate(dt: DateTime) {
  return dt.toFormat('EEEE, MMMM d')
}

function formatTime(dt: DateTime) {
  return dt.toFormat('t ZZZZ')
}

interface EmailPropTypes {
  name: string
  meetingUrl: string
  starts: DateTime
  addToCalGmail: string
  addToCalOutlook: string
  cancelUrl: string
  rescheduleUrl: string
}

export default function Email({
  name = 'Friend',
  meetingUrl = 'https://steadydatecoaching.com/chat',
  starts = DateTime.now(),
  addToCalGmail,
  addToCalOutlook,
  cancelUrl,
  rescheduleUrl,
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
            </Section>
            <Hr className="mt-6 border-t-4 border-steady-pink" />
            <Text className="mt-1 text-xs font-semibold uppercase">
              Your appointment is:
            </Text>
            <Section className="text-center">
              <Text className="m-2">
                Date: <strong>{formatDate(starts)}</strong>
              </Text>
              <Text className="m-2">
                Time: <strong>{formatTime(starts)}</strong>
              </Text>
              <Button
                href={meetingUrl}
                className="m-auto mt-1 rounded-full bg-steady-pink px-6 py-2 text-white"
              >
                Meeting Link
              </Button>
            </Section>
            <Hr className="mt-10 border-t-2 border-steady-pink" />
            <Text className="mt-1 text-xs font-semibold uppercase">
              Need to make changes?
            </Text>
            <Section>
              <Row>
                <Column className="w-1/2 text-center">
                  {/* <Text>Something came up. Need to resched.</Text> */}
                  <Button
                    className="w-10/12 rounded-full bg-steady-pink py-2 text-white"
                    href={rescheduleUrl}
                  >
                    Reschedule
                  </Button>
                </Column>
                <Column className="w-1/2 text-center">
                  {/* <Text>On second thought, we good.</Text> */}
                  <Button
                    className="w-10/12 rounded-full bg-steady-pink py-2 text-white"
                    href={cancelUrl}
                  >
                    Cancel
                  </Button>
                </Column>
              </Row>
              <Text className="mt-10">
                Your appointment should automatically populate on your calendar.
                But if not, you can add it here
              </Text>
              <Row>
                <Column className="w-1/2 text-center">
                  <Button
                    className="w-10/12 rounded-full bg-steady-pink px-2 py-2 text-white"
                    href={addToCalGmail}
                  >
                    Add to Google
                  </Button>
                </Column>
                <Column className="w-1/2 text-center">
                  <Button
                    className="w-10/12 rounded-full bg-steady-pink px-2 py-2 text-white"
                    href={addToCalOutlook}
                  >
                    Add to Outlook
                  </Button>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
