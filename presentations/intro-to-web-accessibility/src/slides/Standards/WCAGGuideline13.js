import React from "react";
import { Layout, CodePane, Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import SlideHeading from "../../components/SlideHeading";
import EnglishS from "../../components/EnglishS";
import Column from "../../components/Column";
import WCAGPrinciple1 from "../../components/WCAGPrinciple1";
import WCAGGuideline from "../../components/WCAGGuideline";
import WCAGGuidelineExample from "../../components/WCAGGuidelineExample";

import example1Img from "../../assets/guideline13-example1.png";

export default class WCAGGuideline13 extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading style={{ fontWeight: "normal" }}>
          دستورالعمل های <EnglishS>WCAG 2.0</EnglishS>
        </SlideHeading>
        <WCAGPrinciple1 />
        <WCAGGuideline number="۱.۳">
          محتوایی خلق کنید که از راه های گوناگون (مثلا با ساختار ساده تر) بدون
          از دست دادن اطلاعات یا ساختار قابل ارائه باشد.{" "}
          <EnglishS>(Level A)</EnglishS>
        </WCAGGuideline>
        <Layout style={{ marginTop: "0.4em" }}>
          <Column>
            <WCAGGuidelineExample>
              مثال ۱ - اطلاعات و روابط - استفاده از المان های معنایی برای نشانه
              گذاری ساختار:
            </WCAGGuidelineExample>
            <CodePane
              lang="html"
              source={`<p>
  Marriage was considered a logical step for a bachelor, as can be seen in the first chapter of the novel 
  <cite>Pride and Prejudice</cite>:
</p>
<blockquote>
  <p>It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.</p>
  <p>However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters.</p>
</blockquote>`}
            />
          </Column>
          <Column>
            <WCAGGuidelineExample>
              مثال ۲ - عدم موفقیت - تغییر معنا و منظور محتوا با تغییر جایگاه
              اطلاعات با استفاده از <EnglishS>CSS</EnglishS>:
            </WCAGGuidelineExample>
            <CodePane
              lang="html"
              source={`<div class="box">      
  <span class="menu1">Products</span>       
  <span class="menu2">Locations</span>       
  <span class="item1">Telephones</span>       
  <span class="item2">Computers</span>       
  <span class="item3">Portable MP3 Players</span>       
  <span class="item5">Wisconsin</span>       
  <span class="item4">Idaho</span>
</div>`}
            />
            <Image
              src={example1Img}
              width="303"
              height="auto"
              alt="Failure - Changing the meaning of content by positioning information with CSS"
              style={{ border: "1px solid gray" }}
            />
          </Column>
        </Layout>
      </Wrapper>
    );
  }
}
