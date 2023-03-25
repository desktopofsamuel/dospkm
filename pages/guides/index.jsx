import { PrismicImage, PrismicLink, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { createClient } from "../../prismicio";
import { components } from "../../slices";
import Link from "next/link";

export default function GuideIndexPage({ pagedata }) {
  return (
    <>
      <h1>Hello</h1>
      {console.log(pagedata)}
      {pagedata.map((post) => (
        <div key={post.uid}>
            <Link href={post.url}>
            <h2>{post.data.title}</h2>
            </Link>
        </div>
      ))}
    </>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const pagedata = await client.getAllByType("post");
  return {
    props: {
      pagedata,
    },
  };
}
