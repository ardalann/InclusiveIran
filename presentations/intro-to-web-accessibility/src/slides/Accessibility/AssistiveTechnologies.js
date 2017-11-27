import React from "react";
import { Heading, List, Layout, Fit, Image, Text } from "spectacle";

import Wrapper from "../../components/Wrapper";
import SlideHeading from "../../components/SlideHeading";
import ListItem from "../../components/ListItem";

const SubHeading = ({ children }) => (
  <Heading size={2} lineHeight={1.55} textSize="0.8em" textAlign="right">
    {children}
  </Heading>
);

const StyledList = props => (
  <List
    {...props}
    textSize="0.6em"
    style={{ lineHeight: "170%", paddingLeft: "0.3em" }}
  />
);

export default class AssistiveTechnologies extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading>فناوری های کمکی</SlideHeading>
        <Layout style={{ marginTop: "1.2em" }}>
          <Fit style={{ flex: 1 }}>
            <SubHeading>صفحه‌خوان ها</SubHeading>
            <StyledList>
              <ListItem en>JAWS</ListItem>
              <ListItem en>NVDA</ListItem>
              <ListItem en>Apple VoiceOver (OSX, iOS)</ListItem>
              <ListItem en>Window Eyes</ListItem>
              <ListItem en>System Access</ListItem>
              <ListItem en>ChromeVox</ListItem>
              <ListItem en>Android TalkBack</ListItem>
            </StyledList>
          </Fit>
          <Fit style={{ flex: 1 }}>
            <SubHeading>بزرگنمایی</SubHeading>
            <StyledList>
              <ListItem en>OSX و iOS</ListItem>
              <ListItem en>Magnifier (Windows)</ListItem>
              <ListItem en>ZoomText</ListItem>
              <ListItem>مرورگرهای مدرن</ListItem>
            </StyledList>
          </Fit>
          <Fit style={{ flex: 1 }}>
            <SubHeading>سخت افزار</SubHeading>
            <StyledList>
              <ListItem>
                کیبوردهای جایگزین <br />(Alternative Keyboards)
              </ListItem>
              <ListItem en>Braille embossers</ListItem>
              <ListItem en>ردیاب چشم</ListItem>
              <ListItem en>Joysticks</ListItem>
              <ListItem en>Pointing Devices</ListItem>
              <ListItem en>Sip and Puff</ListItem>
              <ListItem en>سوییچ ها و دکمه ها</ListItem>
              <ListItem en>Trackballs</ListItem>
              <ListItem>و غیره…</ListItem>
            </StyledList>
          </Fit>
        </Layout>
      </Wrapper>
    );
  }
}
