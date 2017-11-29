import React from "react";
import { Layout, Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import SlideHeading from "../../components/SlideHeading";
import EnglishS from "../../components/EnglishS";
import Column from "../../components/Column";
import WCAGPrinciple2 from "../../components/WCAGPrinciple2";
import WCAGGuideline from "../../components/WCAGGuideline";

import example1Img from "../../assets/guideline23-example1.png";

export default class WCAGGuideline23 extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading style={{ fontWeight: "normal" }}>
          دستورالعمل های <EnglishS>WCAG 2.0</EnglishS>
        </SlideHeading>
        <WCAGPrinciple2 />
        <WCAGGuideline number="۲.۳">
          محتوا را طوری طراحی نکنید که باعث تشنج شود.
        </WCAGGuideline>
        <Layout style={{ marginTop: "0.4em" }}>
          <Column>
            <Image
              src={example1Img}
              width="781"
              height="auto"
              alt="Flashing image with Internet Explorer icon in the middle"
            />
          </Column>
        </Layout>
      </Wrapper>
    );
  }
}
