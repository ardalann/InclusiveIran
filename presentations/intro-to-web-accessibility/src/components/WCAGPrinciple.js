import React from "react";
import { Heading, Text } from "spectacle";

import EnglishS from "./EnglishS";
import Wrapper from "./Wrapper";

const WCAGPrinciple = ({ fa, en, description, large }) => (
  <Wrapper>
    <Heading
      size={2}
      lineHeight={1}
      textSize={large ? "1.2em" : "0.7em"}
      textAlign="right"
      margin={large ? "3.5em 0 1em" : "0.5em 0 0"}
    >
      {fa} <EnglishS>({en})</EnglishS>
    </Heading>
    <Text
      lineHeight={1}
      textSize={large ? "1.0em" : "0.6em"}
      textAlign="right"
      margin={large ? "0 0 4em" : undefined}
    >
      {description}
    </Text>
  </Wrapper>
);

export default WCAGPrinciple;
