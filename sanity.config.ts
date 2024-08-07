'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { SLUG_QUERY } from '@/sanity/lib/queries'
import { type SLUG_QUERYResult } from 'sanity.types'
import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  document: {
    // prev is the result from previous plugins and thus can be composed
    productionUrl: async (prev, context) => {
      // context includes the client and other details
      const { getClient, dataset, document } = context
      const client = getClient({ apiVersion: '2023-05-31' })

      if (document._type === 'post') {
        const slug = await client.fetch<SLUG_QUERYResult>(SLUG_QUERY, {
          id: document._id,
        })

        const params = new URLSearchParams()
        params.set('preview', 'true')
        params.set('dataset', dataset)

        const baseURL = process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : 'https://steadydatecoaching.com'

        return `${baseURL}/${slug}?${params.toString()}`
      }

      return prev
    },
  },
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    // -- Uncomment for development --
    // visionTool({ defaultApiVersion: apiVersion }),
  ],
})
