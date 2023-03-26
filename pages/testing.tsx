import { SliceZone } from '@prismicio/react'
import Layout from '@/components/Layout'
import { createClient } from '../prismicio'
import { components } from '../slices'

export default function Page({ page }) {
  return <Layout><SliceZone slices={page.data.slices} components={components} /></Layout>
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('landing')

  return {
    props: {
      page,
    },
  }
}