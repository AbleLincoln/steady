import { client } from '@/sanity/lib/client'
import { POSTS_QUERY } from '@/sanity/lib/queries'
import Link from 'next/link'
import { type POSTS_QUERYResult } from 'sanity.types'

export default async function Blog() {
  const posts = await client.fetch<POSTS_QUERYResult>(POSTS_QUERY)

  return (
    <main>
      {posts.map(({ _id, title, slug }) => (
        <li key={_id}>
          <Link href={`/blog/${slug?.current}`}>{title}</Link>
        </li>
      ))}
    </main>
  )
}
