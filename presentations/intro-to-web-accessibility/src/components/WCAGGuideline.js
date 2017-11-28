import React from "react";
import { Heading, Text } from "spectacle";

import Wrapper from "./Wrapper";

const WCAGGuideline = ({ number, children }) => (
  <Wrapper>
    <Heading
      size={2}
      lineHeight={1}
      textSize="0.9em"
      textAlign="right"
      margin="0.5em 0 0.3em"
    >
      دستورالعمل {number}
    </Heading>
    <Text
      textSize="0.75em"
      textAlign="right"
      margin="0 0 1.2em"
      style={{ lineHeight: "190%" }}
    >
      {children}
    </Text>
  </Wrapper>
);

export default WCAGGuideline;
