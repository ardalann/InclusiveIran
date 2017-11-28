import React from "react";
import { Heading } from "spectacle";

const WCAGGuidelineExample = ({ children }) => (
  <Heading
    size={2}
    lineHeight={1.5}
    textSize="0.6em"
    textAlign="right"
    margin="0.2em 0 1em"
    style={{ fontWeight: "normal" }}
  >
    {children}
  </Heading>
);

export default WCAGGuidelineExample;
