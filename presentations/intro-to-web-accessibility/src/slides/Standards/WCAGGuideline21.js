import React from "react";
import { Layout, CodePane, Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import SlideHeading from "../../components/SlideHeading";
import EnglishS from "../../components/EnglishS";
import Column from "../../components/Column";
import WCAGPrinciple2 from "../../components/WCAGPrinciple2";
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
        <WCAGPrinciple2 />
        <WCAGGuideline number="۲.۱">
          تمام قابلیت ها را از یک کیبورد در دسترس قرار دهید.
        </WCAGGuideline>
        <Layout style={{ marginTop: "0.4em" }}>
          <Column>
            <WCAGGuidelineExample>
              مثال - وقتی کاربر موس را روی عکس می برد تصویر عوض می شود. برای
              اینکه کاربران کیبوردی هم تجربه مشابهی داشته باشند، وقتی کاربر با
              دکمه تب روی عکس برود هم تصویر عوض می شود:
            </WCAGGuidelineExample>
            <CodePane
              lang="html"
              source={`<a 
  href="menu.php" 
  onmouseover="swapImageOn('menu')" 
  onmouseout="swapImageOff('menu')" 
  onfocus="swapImageOn('menu')" 
  onblur="swapImageOff('menu')"
> 
  <img id="menu" src="menu_off.gif" alt="Menu" /> 
</a>`}
            />
          </Column>
          <Column>
            <Image
              src={example1Img}
              width="964"
              height="auto"
              alt="Make all functionality available from a keyboard - Example"
            />
          </Column>
        </Layout>
      </Wrapper>
    );
  }
}
