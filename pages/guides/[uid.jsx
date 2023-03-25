import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { createClient } from "../../prismicio";
import { components } from "../../slices";

export default function GuidePage({ page }) {
  return (
    <>
      <h1>{page.data.title}</h1>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("post", params.uid);

  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();
  const pages = await client.getAllByType("post");

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: false,
  };
}