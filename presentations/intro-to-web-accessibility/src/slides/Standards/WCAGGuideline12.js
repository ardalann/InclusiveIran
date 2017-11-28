import React from "react";
import { Layout, CodePane, Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import SlideHeading from "../../components/SlideHeading";
import EnglishS from "../../components/EnglishS";
import Column from "../../components/Column";
import WCAGPrinciple1 from "../../components/WCAGPrinciple1";
import WCAGGuideline from "../../components/WCAGGuideline";
import WCAGGuidelineExample from "../../components/WCAGGuidelineExample";

import example1Img from "../../assets/guideline12-example1.png";

export default class WCAGGuideline12 extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading style={{ fontWeight: "normal" }}>
          دستورالعمل های <EnglishS>WCAG 2.0</EnglishS>
        </SlideHeading>
        <WCAGPrinciple1 />
        <WCAGGuideline number="۱.۲">
          برای رسانه های مبتنی بر زمان جایگزین هایی فراهم کنید.
        </WCAGGuideline>
        <Layout style={{ marginTop: "0.4em" }}>
          <Column>
            <WCAGGuidelineExample>
              مثال - یک صدای جایگزین برای یک رسانه ویدیویی:
            </WCAGGuidelineExample>
            <CodePane
              lang="html"
              source={`<a href="../video/marslanding.mp4">
  <img 
    src="../images/spaceship.jpg" 
    alt="Mars landing, video-only" 
  />
</a>
<br />
<a href="Mars_landing_audio.mp3">
  Audio description of "Mars Landing"
</a>`}
            />
          </Column>
          <Column>
            <Image
              src={example1Img}
              width="581"
              height="auto"
              alt="A web-based video player"
            />
          </Column>
        </Layout>
      </Wrapper>
    );
  }
}
