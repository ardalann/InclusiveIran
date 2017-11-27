import React from "react";
import { Heading, List, ListItem, Layout, Fit, Image, Text } from "spectacle";

import Wrapper from "../../components/Wrapper";
import EnglishHeading from "../../components/EnglishHeading";
import SlideHeading from "../../components/SlideHeading";
import AssistiveTechnologiesImg from "../../assets/assistive-technologies.png";
import AdaptiveStrategiesImg from "../../assets/adaptive-strategies.png";

const SubHeading = ({ fa, en }) => (
  <Wrapper>
    <Heading size={6} lineHeight={1.55} textSize="0.8em">
      {fa}
    </Heading>
    <EnglishHeading size={6} lineHeight={1.55} textSize="0.6em">
      {en}
    </EnglishHeading>
  </Wrapper>
);

export default class HowDoTheyUseWeb extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading>
          چگونه افراد با ناتوانایی از وب استفاده می کنند؟
        </SlideHeading>
        <Layout>
          <Fit style={{ flex: 1 }}>
            <SubHeading fa="فناوری های کمکی" en="Assistive Technologies" />
            <Text textAlign="right" textSize="0.8em">
              نرم افزارها یا سخت افزارهایی مانند:
            </Text>
            <List textSize="0.6em" style={{ lineHeight: "170%" }}>
              <ListItem textSize="inherit">
                صفحه‌خوان ها (Screen readers)
              </ListItem>
              <ListItem textSize="inherit">
                بزرگنمایی صفحه نمایش (Screen magnifiers)
              </ListItem>
              <ListItem textSize="inherit">
                نرم افزار تشخیص صدا (Voice recognition software)
              </ListItem>
            </List>
            <Image
              alt="VoiceOver Example"
              src={AssistiveTechnologiesImg}
              width="672"
              height="372"
              style={{
                minWidth: "90%",
                maxWidth: "90%",
                height: "auto"
              }}
            />
          </Fit>
          <Fit style={{ flex: 1 }}>
            <SubHeading fa="استراتژی های تطبیقی" en="Adaptive Strategies" />
            <Text textAlign="right" textSize="0.8em">
              تکنیک هایی مانند:
            </Text>
            <List textSize="0.6em" style={{ lineHeight: "170%" }}>
              <ListItem textSize="inherit">افزایش اندازه فونت</ListItem>
              <ListItem textSize="inherit">کاهش سرعت موس</ListItem>
              <ListItem textSize="inherit">روشن کردن زیرنویس</ListItem>
            </List>
            <Image
              alt="Chrome Zooming Example"
              src={AdaptiveStrategiesImg}
              width="428"
              height="253"
              style={{
                minWidth: "100%",
                height: "auto"
              }}
            />
          </Fit>
        </Layout>
      </Wrapper>
    );
  }
}
