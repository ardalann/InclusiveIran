import React from "react";
import { Heading, Text } from "spectacle";

import Wrapper from "./Wrapper";

const WCAGGuideline = ({ number, children }) => (
  <Wrapper>
    <Heading
      size={2}
      lineHeight={1}
      textSize="0.7em"
      textAlign="right"
      margin="1em 0 0.2em"
    >
      دستورالعمل {number}
    </Heading>
    <Text textSize="0.6em" textAlign="right" style={{ lineHeight: "190%" }}>
      {children}
    </Text>
  </Wrapper>
);

export default WCAGGuideline;
