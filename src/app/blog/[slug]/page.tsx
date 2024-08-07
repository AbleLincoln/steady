import Button from '@/app/_components/button'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { POST_QUERY, POSTS_QUERY } from '@/sanity/lib/queries'
import '@/styles/blog.css'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import { type POST_QUERYResult, type POSTS_QUERYResult } from 'sanity.types'

export default async function Page({
  params,
}: {
  params: {
    slug: string
  }
}) {
  const post = await client.fetch<POST_QUERYResult>(POST_QUERY, {
    slug: params.slug,
  })

  if (!post) return null

  const { title, mainImage, body } = post

  console.log(mainImage)

  return (
    <div className="m-auto mb-16 max-w-screen-md">
      <h1 className="mb-10 text-4xl">{title}</h1>

      {mainImage?.asset?._ref ? (
        <Image
          className="float-right m-0 ml-6 w-1/2 rounded-lg"
          src={urlFor(mainImage?.asset?._ref).width(500).height(600).url()}
          width={500}
          height={600}
          alt={mainImage.alt ?? ''}
        />
      ) : null}

      {body ? <PortableText value={body} /> : null}

      <div className="mt-12 text-center">
        <Button href="/#plans">Book a Date Coaching Session</Button>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const posts = await client.fetch<POSTS_QUERYResult>(POSTS_QUERY)

  return posts.map((post) => ({
    slug: post.slug?.current,
  }))
}
