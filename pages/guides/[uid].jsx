import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import { createClient } from "../../prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";

/** @param {import("next").InferGetStaticPropsType<typeof getStaticProps>} */
export default function Page({ article }) {
  /** @type {import('schema-dts').Article} */
  {console.log(article)}

  const schema = {  
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.data.title ? article.data.title : "",
    author: {
      "@type": "Person",
      name: "Samuel W.",
      // The full URL must be provided, including the website's domain.
      url: "https://juxtdesign.cc",
    },
    image: article.data.featured_image ? prismicH.asImageSrc(article.data.featured_image) : "",
    datePublished: article.data.publication_date,
    dateModified: article.last_publication_date,
  };

  return (
    <div>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <main>
        <p>
          The following schema has been added to the <code>&lt;head&gt;</code>{" "}
          of this page:
        </p>
        <pre>
          <code>{JSON.stringify(schema, null, 4)}</code>
        </pre>
        <SliceZone slices={article.data.slices} components={components} />
      </main>
    </div>
  );
}

/** @param {import("next").GetStaticPropsContext<{ uid: string }>} */
export async function getStaticProps({ previewData, params }) {
  const client = createClient({ previewData });

  const article = await client.getByUID("post", params.uid, {
    fetchLinks: ["author.name"],
  });

  return {
    props: { article },
  };
}

/** @type {import("next").GetStaticPaths} */
export async function getStaticPaths() {
  const client = createClient();

  const articles = await client.getAllByType("post");

  return {
    paths: articles.map((article) => prismicH.asLink(article)),
    fallback: false,
  };
}
