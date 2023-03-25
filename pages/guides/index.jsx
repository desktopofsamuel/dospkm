import { PrismicImage, PrismicLink, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { createClient } from "../../prismicio";
import { components } from "../../slices";
import Link from "next/link";

export default function ResourceIndexPage({ pagedata }) {
  return (
    <>
      <h1>Hello</h1>
      {console.log(pagedata)}
      {pagedata.map((post) => (
        <div key={post.uid}>
          <PrismicLink field={post.data.url}>
            <PrismicImage field={post.data.image} />
            <h2>{post.data.title}</h2>
          </PrismicLink>{" "}
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
