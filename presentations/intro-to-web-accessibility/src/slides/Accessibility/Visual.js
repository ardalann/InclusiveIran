import React from "react";
import { Heading, List, ListItem, Layout, Fit, Image, Text } from "spectacle";

import ExampleImg from "../../assets/example-figure-visual.png";

export default class Visual extends React.Component {
  render() {
    return (
      <Layout>
        <Fit style={{ flex: 1 }}>
          <Heading size={6} lineHeight={1.7}>
            بینایی
          </Heading>
          <br />
          <Text textAlign="right" textSize="1.2em">
            مثال:
          </Text>
          <List textSize="0.9em" style={{ lineHeight: "170%" }}>
            <ListItem textSize="inherit">نابینایی</ListItem>
            <ListItem textSize="inherit">کم بینایی</ListItem>
            <ListItem textSize="inherit">کور رنگی</ListItem>
          </List>
          <List textSize="0.7em" style={{ lineHeight: "170%" }}>
            <ListItem textSize="inherit">Mark Zuckerberg</ListItem>
            <ListItem textSize="inherit">Bill Clinton</ListItem>
            <ListItem textSize="inherit">Matt Lauer</ListItem>
            <ListItem textSize="inherit">Prince William</ListItem>
          </List>
        </Fit>
        <Fit style={{ flex: 1, position: "relative", overflow: "hidden" }}>
          <Image
            alt="Mark Zuckerberg"
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
