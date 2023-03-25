import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.TextblockSlice} TextblockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextblockSlice>} TextblockProps
 * @param { TextblockProps }
 */
const Textblock = ({ slice }) => (
  <section>
    {slice?.items?.map((item, i) => (
      <PrismicRichText field={item.richtext} />
    ))}
    <style jsx>{`
      section {
        max-width: 600px;
        margin: 4em auto;
        text-align: center;
      }
      .title {
        color: #8592e0;
      }
    `}</style>
  </section>
);

export default Textblock;
