import React from "react";
import { Layout, CodePane, Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import SlideHeading from "../../components/SlideHeading";
import EnglishS from "../../components/EnglishS";
import Column from "../../components/Column";
import WCAGPrinciple1 from "../../components/WCAGPrinciple1";
import WCAGGuideline from "../../components/WCAGGuideline";
import WCAGGuidelineExample from "../../components/WCAGGuidelineExample";

import example2Img from "../../assets/guideline11-example1.png";
import example3Img from "../../assets/guideline11-example2.png";

export default class WCAGGuideline11 extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading style={{ fontWeight: "normal" }}>
          دستورالعمل های <EnglishS>WCAG 2.0</EnglishS>
        </SlideHeading>
        <WCAGPrinciple1 />
        <WCAGGuideline number="۱.۱">
          برای هر محتوای غیرمتنی، یک جایگزین متنی فراهم کنید تا بتواند به شکل
          های دیگری که مردم نیاز دارند تغییر کند، مثلا به متن بزرگنمایی شده،
          بریل، گفتار، علامت یا زبان ساده تر.
        </WCAGGuideline>
        <Layout style={{ marginTop: "0.4em" }}>
          <Column>
            <WCAGGuidelineExample>
              مثال ۱ - صفت <EnglishS>ALT</EnglishS>:
            </WCAGGuidelineExample>
            <CodePane
              lang="html"
              source={`<img 
  src="newsletter.gif" 
  alt="Free newsletter. Get free recipes, news, and more. Learn more." 
/>`}
            />
          </Column>
          <Column>
            <WCAGGuidelineExample>
              مثال ۲ - <EnglishS>aria-labelledby</EnglishS> و{" "}
              <EnglishS>role</EnglishS>:
            </WCAGGuidelineExample>
            <Image
              src={example2Img}
              width="267"
              height="auto"
              alt="A 5-star rating component"
            />
            <CodePane
              lang="html"
              source={`<div role="img" aria-labelledby="star_id">
  <img src="fullstar.png" alt=""/>
  <img src="fullstar.png" alt=""/>
  <img src="fullstar.png" alt=""/>
  <img src="fullstar.png" alt=""/>
  <img src="emptystar.png" alt=""/>
</div>

<div id="star_id">4 of 5</div>`}
            />
          </Column>
          <Column>
            <WCAGGuidelineExample>
              مثال ۳ - آیکون <EnglishS>SVG</EnglishS> و{" "}
              <EnglishS>role</EnglishS>:
            </WCAGGuidelineExample>
            <Image
              src={example3Img}
              width="50"
              height="auto"
              alt="A checkmark icon"
            />
            <CodePane
              lang="html"
              source={`<svg 
  class="svg-icon icon-checkmark" 
  role="img" 
  title="Checkmark icon" 
  aria-labelledby="my-icon-title"
>
  <title id="my-icon-title">
    Checkmark icon
  </title>
  <use xlink:href="icons.svg#checkmark"/>
</svg>`}
            />
          </Column>
        </Layout>
      </Wrapper>
    );
  }
}
