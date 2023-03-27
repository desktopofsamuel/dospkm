import { PrismicImage, SliceZone,PrismicLink } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { createClient } from "../../prismicio";
import { components } from "../../slices";
import Layout from "@/components/Layout";
import { Heading, Grid, Box, Text, SimpleGrid } from "@chakra-ui/react";

export default function Page({ page }) {
  return (
    <Layout>
      {console.log(page)}
      <SimpleGrid columns={{ sm: 1, md: 2}}>
        <Box>
          <PrismicImage field={page.data.image} />
        </Box>
        <Box>
          <Heading>{page.data.title}</Heading>
          <SliceZone slices={page.data.slices} components={components} />
        </Box>
      </SimpleGrid>
      {/* <Heading>Related</Heading> */}
    </Layout>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const page = await client.getByUID("resource", params.uid)
  const category = await client.getByID(page.data.category.id);
  console.log(category)
  
  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();
  const pages = await client.getAllByType("resource");

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: false,
  };
}
