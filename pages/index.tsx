import { SliceZone } from "@prismicio/react";
import Layout from "@/components/Layout";
import { createClient } from "../prismicio";
import { components } from "../slices";
import { Box, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import ListResource from "@/components/ListResource";

export default function HomePage({ pagedata, categories, resources }) {
  const page = pagedata;
  return (
    <Layout>
      <SliceZone slices={page.data.slices} components={components} />
      <Grid gridColumn="span 12">
        <GridItem gridColumn="span 3">
          <Heading>Categories</Heading>
          {categories.map((item) => (
            <Link href={item.url} key={item.uid}>
              <Box>
                <Text>{item.data.name}</Text>
              </Box>
            </Link>
          ))}
        </GridItem>
        <GridItem gridColumn="span 9">
          <ListResource items={resources} />
        </GridItem>
      </Grid>
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const pagedata = await client.getSingle("landing");
  const categories = await client.getAllByType("category");
  const resources = await (await client.getAllByType("resource")).slice(0, 8);

  return {
    props: {
      pagedata,
      categories,
      resources,
    },
  };
}
