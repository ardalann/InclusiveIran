import React from "react";
import { Layout, Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import SlideHeading from "../../components/SlideHeading";
import EnglishS from "../../components/EnglishS";
import Column from "../../components/Column";
import WCAGPrinciple2 from "../../components/WCAGPrinciple2";
import WCAGGuideline from "../../components/WCAGGuideline";
import WCAGGuidelineExample from "../../components/WCAGGuidelineExample";

import example1Img from "../../assets/guideline22-example1.png";
import example2Img from "../../assets/guideline22-example2.png";

export default class WCAGGuideline22 extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading style={{ fontWeight: "normal" }}>
          دستورالعمل های <EnglishS>WCAG 2.0</EnglishS>
        </SlideHeading>
        <WCAGPrinciple2 />
        <WCAGGuideline number="۲.۲">
          به کاربران زمان کافی برای مطالعه و استفاده از محتوا بدهید.
        </WCAGGuideline>
        <Layout style={{ marginTop: "0.4em" }}>
          <Column>
            <WCAGGuidelineExample>
              مثال ۱ - عدم موفقیت - ارسال کاربر به یک صفحه جدید یا لغو فرم در
              صورتی که کاربر زمان زیادی صرف پر کردن فرم کند.
            </WCAGGuidelineExample>
            <Image
              src={example1Img}
              width="250"
              height="auto"
              alt="Why you do this to me emoji"
            />
          </Column>
          <Column>
            <WCAGGuidelineExample>
              مثال ۲ - در اسلایدرهای <EnglishS>auto-play enabled</EnglishS>،
              همیشه یک دکمه توقف فراهم کنید.
            </WCAGGuidelineExample>
            <Image
              src={example2Img}
              width="343"
              height="auto"
              alt="In auto-play enabled carousels, always provide a pause control"
            />
          </Column>
        </Layout>
      </Wrapper>
    );
  }
}
