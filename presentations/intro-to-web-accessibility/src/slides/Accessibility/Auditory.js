import React from "react";
import { Heading, List, ListItem, Layout, Fit, Image, Text } from "spectacle";

import ExampleImg from "../../assets/example-figure-auditory.png";

export default class Auditory extends React.Component {
  render() {
    return (
      <Layout>
        <Fit style={{ flex: 1 }}>
          <Heading size={6} lineHeight={1.7}>
            شنوایی
          </Heading>
          <br />
          <Text textAlign="right" textSize="1.2em">
            مثال:
          </Text>
          <List textSize="0.9em" style={{ lineHeight: "170%" }}>
            <ListItem textSize="inherit">ناشنوایی</ListItem>
            <ListItem textSize="inherit">کم شنوایی</ListItem>
            <ListItem textSize="inherit">کم شنوایی با بالا رفتن سن</ListItem>
          </List>
          <List textSize="0.7em" style={{ lineHeight: "170%" }}>
            <ListItem textSize="inherit">Bill Clinton</ListItem>
            <ListItem textSize="inherit">Rob Lowe</ListItem>
            <ListItem textSize="inherit">Halle Berry</ListItem>
            <ListItem textSize="inherit">Stephen Colbert</ListItem>
          </List>
        </Fit>
        <Fit style={{ flex: 1, position: "relative", overflow: "hidden" }}>
          <Image
            alt="Bill Clinton"
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
