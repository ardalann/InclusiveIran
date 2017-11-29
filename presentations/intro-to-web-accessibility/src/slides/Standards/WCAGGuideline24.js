import React from "react";
import { Layout, List } from "spectacle";

import Wrapper from "../../components/Wrapper";
import SlideHeading from "../../components/SlideHeading";
import EnglishS from "../../components/EnglishS";
import ListItem from "../../components/ListItem";
import Column from "../../components/Column";
import WCAGPrinciple2 from "../../components/WCAGPrinciple2";
import WCAGGuideline from "../../components/WCAGGuideline";
import WCAGGuidelineExample from "../../components/WCAGGuidelineExample";

export default class WCAGGuideline24 extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading style={{ fontWeight: "normal" }}>
          دستورالعمل های <EnglishS>WCAG 2.0</EnglishS>
        </SlideHeading>
        <WCAGPrinciple2 />
        <WCAGGuideline number="۲.۴">
          برای کاربران راه هایی برای حرکت، پیدا کردن محتوا، و تعیین جایی که
          هستند فراهم کنید.
        </WCAGGuideline>
        <Layout style={{ marginTop: "0.4em" }}>
          <Column>
            <WCAGGuidelineExample>
              مثال ۱ - عدم موفقیت - در زیر مثال هایی می بینید از نوشته هایی که{" "}
              <EnglishS>title</EnglishS> نیستند:
            </WCAGGuidelineExample>
            <List textSize="0.6em" style={{ lineHeight: 1.8 }}>
              <ListItem>
                عناوین پیشفرض، مثل:
                <List>
                  <ListItem en>"Untitled Document"</ListItem>
                  <ListItem en>"No Title"</ListItem>
                  <ListItem en>"Untitled Page"</ListItem>
                  <ListItem en>"New Page 1"</ListItem>
                </List>
              </ListItem>
              <ListItem>متن خالی</ListItem>
              <ListItem>
                متن <EnglishS>placeholder</EnglishS>
              </ListItem>
              <ListItem>
                عنوان های <EnglishS>SEO</EnglishS> مثل «هاست لينوکس,هاست
                ویندوز,هاست ارزان,ثبت دامنه,خرید هاست» (برگرفته از{" "}
                <EnglishS>dolathost.com</EnglishS>)
              </ListItem>
            </List>
          </Column>
          <Column>
            <WCAGGuidelineExample>
              مثال ۲ - عدم موفقیت - <EnglishS>focus</EnglishS> کردن روی{" "}
              <EnglishS>document</EnglishS> بعد از بسته شدن{" "}
              <EnglishS>modal</EnglishS>:
              <br />
              <br />
              وقتی یک <EnglishS>modal</EnglishS> بسته می شود، از صفحه پاک می شود
              یا بیرون می رود و <EnglishS>focus</EnglishS> می رود روی{" "}
              <EnglishS>document</EnglishS>. کاربر باید از اول صفحه دوباره انقدر
              دکمه <EnglishS>tab</EnglishS> را فشار دهد تا به نقطه ای برسد که{" "}
              <EnglishS>modal</EnglishS> از آنجا باز شده بود.
            </WCAGGuidelineExample>
          </Column>
        </Layout>
      </Wrapper>
    );
  }
}
