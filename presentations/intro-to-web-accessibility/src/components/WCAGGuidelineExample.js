import React from "react";
import { Heading } from "spectacle";

const WCAGGuidelineExample = ({ children }) => (
  <Heading
    size={2}
    lineHeight={1}
    textSize="0.7em"
    textAlign="right"
    margin="0.2em 0 1em"
  >
    {children}
  </Heading>
);

export default WCAGGuidelineExample;
