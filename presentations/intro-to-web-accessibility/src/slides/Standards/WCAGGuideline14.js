import React from "react";
import { Layout, CodePane, Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import SlideHeading from "../../components/SlideHeading";
import EnglishS from "../../components/EnglishS";
import Column from "../../components/Column";
import WCAGPrinciple1 from "../../components/WCAGPrinciple1";
import WCAGGuideline from "../../components/WCAGGuideline";
import WCAGGuidelineExample from "../../components/WCAGGuidelineExample";

import example1Img from "../../assets/guideline14-example1.png";
import example1CorrectImg from "../../assets/guideline14-example1-correct.png";
import example2Img from "../../assets/guideline14-example2.png";
import example3Img from "../../assets/guideline14-example3.png";
import example3AAImg from "../../assets/guideline14-example3-aa.png";
import example3AAAImg from "../../assets/guideline14-example3-aaa.png";

export default class WCAGGuideline14 extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading style={{ fontWeight: "normal" }}>
          دستورالعمل های <EnglishS>WCAG 2.0</EnglishS>
        </SlideHeading>
        <WCAGPrinciple1 />
        <WCAGGuideline number="۱.۴">
          دیدن و شنیدن محتوا را برای کاربران از جمله با جدا کردن پیش زمینه از پس
          زمینه آسان تر کنید.
        </WCAGGuideline>
        <Layout style={{ marginTop: "0.4em" }}>
          <Column>
            <WCAGGuidelineExample>
              مثال ۱ - عدم موفقیت - استفاده از رنگ به عنوان تنها وسیله بصری
              انتقال اطلاعات:
            </WCAGGuidelineExample>
            <Image
              src={example1Img}
              width="292"
              height="auto"
              alt="Failure - A form input that has a red border when there is an error with the value"
            />
            <WCAGGuidelineExample>مثال درست:</WCAGGuidelineExample>
            <Image
              src={example1CorrectImg}
              width="291"
              height="auto"
              alt="Success - Showing an error message next to the input as well as changing the border color"
            />
          </Column>
          <Column>
            <WCAGGuidelineExample>
              مثال ۲ - عدم موفقیت - نمی توان اندازه نوشته را بدون ناخوانا شدن
              نوشته ها تغییر داد:
            </WCAGGuidelineExample>
            <CodePane
              lang="html"
              source={`<div 
  style="
    font-size:100%; 
    width:120px; 
    height:100px; 
    border: thin solid gray;
  "
>
  Now is the time for all good men to come to the aid of their country.
</div>
<p>Now is the time for all...</p>`}
            />
            <Image
              src={example2Img}
              width="206"
              height="auto"
              alt="Failure - Cannot resize the text without obscuring the next paragraph"
            />
          </Column>
          <Column>
            <WCAGGuidelineExample>
              مثال ۳ - کنتراست رنگ ها:
            </WCAGGuidelineExample>
            <Image
              src={example3Img}
              width="206"
              height="auto"
              alt="Failure - Color contrast not meeting level AA and AAA requirements"
              style={{ border: "1px solid gray", marginTop: "1em" }}
            />
            <Image
              src={example3AAImg}
              width="206"
              height="auto"
              alt="Color contrast not meeting level AAA requirements"
              style={{ border: "1px solid gray", marginTop: "1em" }}
            />
            <Image
              src={example3AAAImg}
              width="206"
              height="auto"
              alt="Success - Color contrast meeting level AAA requirements"
              style={{ border: "1px solid gray", marginTop: "1em" }}
            />
          </Column>
        </Layout>
      </Wrapper>
    );
  }
}
