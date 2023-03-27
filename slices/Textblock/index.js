import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { Box, Text } from "@chakra-ui/react";

/**
 * @typedef {import("@prismicio/client").Content.TextblockSlice} TextblockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextblockSlice>} TextblockProps
 * @param { TextblockProps }
 */
const Textblock = ({ slice }) => (
  <Box><Text> {slice?.items?.map((item, i) => (
    <PrismicRichText key={item.uid} field={item.richtext} />
  ))}</Text></Box>
);

export default Textblock;
