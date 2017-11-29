import React from "react";
import { Layout, CodePane, Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import SlideHeading from "../../components/SlideHeading";
import EnglishS from "../../components/EnglishS";
import Column from "../../components/Column";
import WCAGPrinciple3 from "../../components/WCAGPrinciple3";
import WCAGGuideline from "../../components/WCAGGuideline";
import WCAGGuidelineExample from "../../components/WCAGGuidelineExample";

import example1Img from "../../assets/guideline33-example1.png";

export default class WCAGGuideline33 extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading style={{ fontWeight: "normal" }}>
          دستورالعمل های <EnglishS>WCAG 2.0</EnglishS>
        </SlideHeading>
        <WCAGPrinciple3 />
        <WCAGGuideline number="۳.۳">
          به کاربران کمک کنید که اشتباهات را جلوگیری و اصلاح کنند.
        </WCAGGuideline>
        <Layout style={{ marginTop: "0.4em" }}>
          <Column>
            <WCAGGuidelineExample>
              مثال ۱ - ایجاد اعتبارسنجی و اخطار در سمت{" "}
              <EnglishS>client</EnglishS>:
            </WCAGGuidelineExample>
            <CodePane
              lang="html"
              source={`<label for="date">Date:</label>
<input 
  type="text" 
  name="date" 
  id="date" 
  onchange="if( isNaN( Date.parse(this.value) ) ) 
    alert('This control is not a valid date. Please re-enter the value.');" 
/>`}
            />
          </Column>
          <Column>
            <WCAGGuidelineExample>
              مثال ۲ - استفاده از المان <EnglishS>label</EnglishS> برای پیوند
              دادن برچسب متنی به <EnglishS>input</EnglishS>ها:
            </WCAGGuidelineExample>
            <CodePane
              lang="html"
              source={`<label for="firstname">
  First name:
</label> 
<input 
  type="text" 
  name="firstname" 
  id="firstname" 
/>`}
            />
          </Column>
          <Column>
            <WCAGGuidelineExample>
              مثال ۳ - عدم موفقیت - در ایالات متحده، برخی از کاربران{" "}
              <EnglishS>input</EnglishS>های زیر را بعنوان شماره تلفن تشخیض می
              دهند. با این حال، هیچ برچسب متنی برای شماره تلفن در صفحه وجود
              ندارد. این به این دلیل است که <EnglishS>label</EnglishS> هر فیلد
              نزدیکترین متن پیشین خواهد بود، بنابراین <EnglishS>label</EnglishS>{" "}
              سه فیلد زیر به ترتیب اینها خواهد بود: -، (، )
            </WCAGGuidelineExample>
            <Image
              src={example1Img}
              width="234"
              height="auto"
              alt={`Failure - In the US, some users recognize the fields below as a phone number. However, there is no text label for the phone number on the web page. This is because the label for each field will be the closest preceding text, so the three fields would be labeled "(", ")" , and "-" respectively`}
            />
          </Column>
        </Layout>
      </Wrapper>
    );
  }
}
