import React from "react";
import { Layout, Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import SlideHeading from "../../components/SlideHeading";
import EnglishS from "../../components/EnglishS";
import Column from "../../components/Column";
import WCAGPrinciple3 from "../../components/WCAGPrinciple3";
import WCAGGuideline from "../../components/WCAGGuideline";
import WCAGGuidelineExample from "../../components/WCAGGuidelineExample";

import example1Img from "../../assets/guideline31-example1.png";

export default class WCAGGuideline31 extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading style={{ fontWeight: "normal" }}>
          دستورالعمل های <EnglishS>WCAG 2.0</EnglishS>
        </SlideHeading>
        <WCAGPrinciple3 />
        <WCAGGuideline number="۳.۱">
          محتوای متنی را خوانا و قابل فهم کنید.
        </WCAGGuideline>
        <Layout style={{ marginTop: "0.4em" }}>
          <Column>
            <WCAGGuidelineExample>
              مثال - مخفف ها - راهی برای شناسایی شکل اصلی یا معنای مخفف ها تعبیه
              شده است. <EnglishS>(Level AAA)</EnglishS>
            </WCAGGuidelineExample>
            <Image
              src={example1Img}
              width="470"
              height="auto"
              alt="Abbreviations: A mechanism for identifying the expanded form or meaning of abbreviations is available. (Level AAA)"
            />
          </Column>
        </Layout>
      </Wrapper>
    );
  }
}
