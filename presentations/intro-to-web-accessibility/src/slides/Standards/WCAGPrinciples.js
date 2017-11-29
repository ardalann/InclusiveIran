import React from "react";
import { Heading } from "spectacle";

import Wrapper from "../../components/Wrapper";
import EnglishS from "../../components/EnglishS";

export default class WCAGPrinciples extends React.Component {
  render() {
    return (
      <Wrapper>
        <Heading size={1} textSize="1.5em" textColor="primary">
          ۴ اصل و ۱۲ دستورالعمل <EnglishS type="bold">WCAG 2.0</EnglishS>
        </Heading>
      </Wrapper>
    );
  }
}
