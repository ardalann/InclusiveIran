import React from "react";
import { Heading, Text } from "spectacle";

import EnglishS from "./EnglishS";
import Wrapper from "./Wrapper";

const WCAGPrinciple = ({ fa, en, description }) => (
  <Wrapper>
    <Heading
      size={2}
      lineHeight={1}
      textSize="0.7em"
      textAlign="right"
      margin="0.5em 0 0"
    >
      {fa} <EnglishS>({en})</EnglishS>
    </Heading>
    <Text lineHeight={1} textSize="0.6em" textAlign="right">
      {description}
    </Text>
  </Wrapper>
);

export default WCAGPrinciple;
