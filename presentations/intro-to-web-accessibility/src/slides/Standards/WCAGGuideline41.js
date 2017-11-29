import React from "react";
import { Layout, CodePane, Image, Link, S } from "spectacle";

import Wrapper from "../../components/Wrapper";
import SlideHeading from "../../components/SlideHeading";
import EnglishS from "../../components/EnglishS";
import Column from "../../components/Column";
import WCAGPrinciple4 from "../../components/WCAGPrinciple4";
import WCAGGuideline from "../../components/WCAGGuideline";
import WCAGGuidelineExample from "../../components/WCAGGuidelineExample";

import example1Img from "../../assets/guideline21-example1.gif";

export default class WCAGGuideline21 extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading style={{ fontWeight: "normal" }}>
          دستورالعمل های <EnglishS>WCAG 2.0</EnglishS>
        </SlideHeading>
        <WCAGPrinciple4 />
        <WCAGGuideline number="۴.۱">
          سازگاری با نرم افزار ها و سخت افزار های فعلی و آینده، از جمله فناوری
          های کمکی، را به حداکثر برسانید.
        </WCAGGuideline>
        <Layout style={{ marginTop: "0.4em" }}>
          <Column>
            <WCAGGuidelineExample>
              مثال - عدم موفقیت - <EnglishS>markup</EnglishS> نادرست (تگ بسته
              نشده):
            </WCAGGuidelineExample>
            <CodePane
              lang="html"
              source={`<p>This is a paragraph
<p>This is another paragraph</p>`}
            />
            <br />
            <WCAGGuidelineExample>
              <S type="bold">نکته</S>: <EnglishS>markup</EnglishS>تان را با
              استفاده از خدمات <EnglishS>markup validation</EnglishS> از{" "}
              <EnglishS>W3C</EnglishS> چک کنید:{" "}
              <EnglishS>
                <Link href="https://validator.w3.org/">validator.w3.org</Link>
              </EnglishS>
            </WCAGGuidelineExample>
          </Column>
        </Layout>
      </Wrapper>
    );
  }
}
