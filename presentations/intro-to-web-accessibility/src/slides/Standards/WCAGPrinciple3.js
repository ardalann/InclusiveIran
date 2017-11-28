import React from "react";

import Principle from "../../components/WCAGPrinciple3";

import Wrapper from "../../components/Wrapper";
import SlideHeading from "../../components/SlideHeading";
import EnglishS from "../../components/EnglishS";

export default class WCAGPrinciple3 extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading style={{ fontWeight: "normal" }}>
          ۴ اصل <EnglishS>WCAG 2.0</EnglishS>
        </SlideHeading>
        <Principle large />
      </Wrapper>
    );
  }
}
