import React from "react";
import { Heading, List, ListItem, Layout, Fit, Image, Text } from "spectacle";

import ExampleImg from "../../assets/example-figure-mental.png";

export default class Mental extends React.Component {
  render() {
    return (
      <Layout>
        <Fit style={{ flex: 1 }}>
          <Heading size={6} lineHeight={1.7}>
            ذهنی
          </Heading>
          <Text textAlign="right" textSize="1.2em">
            مثال:
          </Text>
          <List textSize="0.9em" style={{ lineHeight: "170%" }}>
            <ListItem textSize="inherit">اوتیسم</ListItem>
            <ListItem textSize="inherit">Dementia</ListItem>
            <ListItem textSize="inherit">سندرم داون</ListItem>
            <ListItem textSize="inherit">نارساخوانی (Dyslexia)</ListItem>
            <ListItem textSize="inherit">Dyspraxia</ListItem>
          </List>
          <List textSize="0.7em" style={{ lineHeight: "170%" }}>
            <ListItem textSize="inherit">Daniel Radcliffe</ListItem>
            <ListItem textSize="inherit">Steven Spielberg</ListItem>
            <ListItem textSize="inherit">Anderson Cooper</ListItem>
            <ListItem textSize="inherit">Keira Knightley</ListItem>
          </List>
        </Fit>
        <Fit style={{ flex: 1, position: "relative", overflow: "hidden" }}>
          <Image
            alt="Daniel Radcliffe"
            src={ExampleImg}
            width="361"
            height="405"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              minWidth: "100%",
              minHeight: "100%",
              objectFit: "cover",
              margin: 0
            }}
          />
        </Fit>
      </Layout>
    );
  }
}
