import React from "react";
import { Heading, Text } from "spectacle";

import Wrapper from "../../components/Wrapper";
import EnglishText from "../../components/EnglishText";

export default class AccessibilityCover extends React.Component {
  render() {
    return (
      <Wrapper>
        <Heading size={4} lineHeight={1.7} textColor="primary">
          دسترسی پذیری
        </Heading>
        <EnglishText lineHeight={1.7} textColor="primary">
          (Accessibility)
        </EnglishText>
        <Text lineHeight={2.5} style={{ margin: "0.5em" }} textColor="primary">
          و
        </Text>
        <Heading size={4} lineHeight={1.7} textColor="primary">
          طراحی فراگیر
        </Heading>
        <EnglishText lineHeight={1.7} textColor="primary">
          (Inclusive Design)
        </EnglishText>
      </Wrapper>
    );
  }
}
