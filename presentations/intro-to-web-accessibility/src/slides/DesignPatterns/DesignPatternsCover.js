import React from "react";
import { Heading } from "spectacle";

import Wrapper from "../../components/Wrapper";
import EnglishHeading from "../../components/EnglishHeading";

export default class DesignPatternsCover extends React.Component {
  render() {
    return (
      <Wrapper>
        <Heading size={2} lineHeight={2} textColor="primary">
          الگوهای طراحی
        </Heading>
        <EnglishHeading size={5} textColor="primary">
          (Design Patterns)
        </EnglishHeading>
      </Wrapper>
    );
  }
}
