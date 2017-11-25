import React from "react";
import { Heading } from "spectacle";

import Wrapper from "../../components/Wrapper";

export default class AccessibilityCover extends React.Component {
  render() {
    return (
      <Wrapper>
        <Heading size={2} lineHeight={1.7} textColor="primary">
          دسترسی پذیری
        </Heading>
        <Heading size={6} lineHeight={1.7} textColor="primary">
          (Accessibility)
        </Heading>
      </Wrapper>
    );
  }
}
