import React from "react";
import { Layout, CodePane, Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import SlideHeading from "../../components/SlideHeading";
import EnglishS from "../../components/EnglishS";
import Column from "../../components/Column";
import WCAGPrinciple3 from "../../components/WCAGPrinciple3";
import WCAGGuideline from "../../components/WCAGGuideline";
import WCAGGuidelineExample from "../../components/WCAGGuidelineExample";

import example1Img from "../../assets/guideline32-example1.png";

export default class WCAGGuideline32 extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading style={{ fontWeight: "normal" }}>
          دستورالعمل های <EnglishS>WCAG 2.0</EnglishS>
        </SlideHeading>
        <WCAGPrinciple3 />
        <WCAGGuideline number="۳.۲">
          نمایش و عملکرد صفحات وب را قابل پیش بینی کنید.
        </WCAGGuideline>
        <Layout style={{ marginTop: "0.4em" }}>
          <Column>
            <WCAGGuidelineExample>
              مثال ۱ - عدم موفقیت - یک کد جاوااسکریپت که{" "}
              <EnglishS>focus</EnglishS> را <EnglishS>reset</EnglishS> می کند:
            </WCAGGuidelineExample>
            <Image
              src={example1Img}
              width="424"
              height="auto"
              alt="Example 1 - Failure - A script removes focus when focus is received"
            />
          </Column>
          <Column>
            <WCAGGuidelineExample>
              مثال ۲ - عدم موفقیت - یک ابزار نوشتن آنلاین که در یک صفحه از دکمه{" "}
              <EnglishS>Save page</EnglishS> و در صفحه دیگر از دکمه{" "}
              <EnglishS>Save</EnglishS> برای عملکرد کاملا یکسان استفاده می کند.
            </WCAGGuidelineExample>
          </Column>
          <Column>
            <WCAGGuidelineExample>
              مثال ۳ - عدم موفقیت - یک مکانیزم جابجایی که لینک ها را با ترتیب
              های مختلفی نمایش می دهد:
            </WCAGGuidelineExample>
            <CodePane
              lang="html"
              source={`<!-- Page 1 Menu -->
<div id="menu"> 
  <a href="Brazil.htm">Brazil</a>
  <a href="Canada.htm">Canada</a>
  <a href="Germany.htm">Germany</a>
  <a href="Poland.htm">Poland</a> 
</div>

<!-- Page 2 Menu -->
<div id="menu"> 
  <a href="Canada.htm">Canada</a>
  <a href="Brazil.htm">Brazil</a>
  <a href="Germany.htm">Germany</a>
  <a href="Poland.htm">Poland</a> 
</div>`}
            />
          </Column>
        </Layout>
      </Wrapper>
    );
  }
}
