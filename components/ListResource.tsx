import { Box, Grid, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import {
  PrismicImage,
  PrismicLink,
  SliceZone,
  PrismicRichText,
} from "@prismicio/react";
import { components } from "@/slices";

export default function Layout({ items }) {
  return (
    <SimpleGrid columns={2} gap={4}>
      {items.map((item) => (
        <Box key={item.uid}>
          <Link href={item.url}>
            <>
              {item.data.image ? <PrismicImage field={item.data.image} /> : ""}
              <Heading fontSize="md">{item.data.title}</Heading>
              {console.log(item.data.slices)}
              <Text>
                <SliceZone slices={item.data.slices} components={components} />
              </Text>
            </>
          </Link>
        </Box>
      ))}
    </SimpleGrid>
  );
}

const resolver = (slice, i) => {
  switch (slice.slice_type) {
    case "textblock":
      return (
        <Box key={i}>
          <PrismicRichText field={slice.items[0].richtext} />
        </Box>
      );
    // case "quote":
    //   return (
    //     <Box key={i}>
    //       <PrismicRichText field={slice.primary.quote} />
    //       {slice.primary.author ? (
    //         <Text fontWeight="bold" textAlign="right">
    //           - {slice.primary.author}
    //         </Text>
    //       ) : null}
    //     </Box>
    //   );
    default:
      return null;
  }
};
