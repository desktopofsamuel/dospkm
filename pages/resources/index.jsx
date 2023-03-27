import { PrismicImage, PrismicLink, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { createClient } from "../../prismicio";
import { components } from "../../slices";
import Link from "next/link";
import Layout from "@/components/Layout"
import ListResource from "@/components/ListResource"
import { Heading } from "@chakra-ui/react";

export default function ResourceIndexPage({ pagedata }) {
  return (
    <Layout>
      <Heading>Hello</Heading>
      <ListResource items={pagedata}/>
    </Layout>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const pagedata = await client.getAllByType("resource");
  return {
    props: {
      pagedata,
    },
  };
}
