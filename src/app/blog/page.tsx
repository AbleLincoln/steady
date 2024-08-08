import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { POSTS_QUERY } from '@/sanity/lib/queries'
import { DateTime } from 'luxon'
import Image from 'next/image'
import Link from 'next/link'
import { type POSTS_QUERYResult } from 'sanity.types'

export default async function Blog() {
  const posts = await client.fetch<POSTS_QUERYResult>(POSTS_QUERY)

  return (
    <main className="m-auto max-w-screen-sm">
      {posts.map(({ _id, title, slug, mainImage, publishedAt }) => (
        <Link
          key={_id}
          href={`/blog/${slug?.current}`}
          className="mb-8 flex rounded-lg border border-steady-purple/0 bg-steady-purple/15 transition-colors hover:border-steady-purple/50 hover:shadow-sm"
        >
          <div className="flex w-full flex-col px-4 py-4 sm:w-2/3 sm:px-6">
            {publishedAt ? (
              <span className="opacity-75">
                {DateTime.fromISO(publishedAt).toFormat('DD')}
              </span>
            ) : null}
            <h2 className="text-steady-dark-dark-purple text-3xl leading-normal md:text-4xl">
              {title}
            </h2>
          </div>
          <div className="hidden w-1/3 sm:block">
            {mainImage?.asset?._ref ? (
              <Image
                className="float-right m-0 ml-6 w-full rounded-r-lg"
                src={urlFor(mainImage?.asset?._ref)
                  .width(500)
                  .height(500)
                  .url()}
                width={100}
                height={100}
                alt={mainImage.alt ?? ''}
              />
            ) : null}
          </div>
        </Link>
      ))}
    </main>
  )
}
