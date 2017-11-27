import React from "react";
import { Heading, List, ListItem, Layout, Fit, Image, Text } from "spectacle";

import ExampleImg from "../../assets/example-figure-physical.png";

export default class Physical extends React.Component {
  render() {
    return (
      <Layout>
        <Fit style={{ flex: 1 }}>
          <Heading size={6} lineHeight={1.7}>
            فیزیکی
          </Heading>
          <br />
          <Text textAlign="right" textSize="1.2em">
            مثال:
          </Text>
          <List textSize="0.9em" style={{ lineHeight: "170%" }}>
            <ListItem textSize="inherit">محدودیت های حرکتی</ListItem>
            <ListItem textSize="inherit">سرعت پایین واکنش</ListItem>
            <ListItem textSize="inherit">
              مربوط به بیماری (ALS, Parkinson)
            </ListItem>
          </List>
          <List textSize="0.7em" style={{ lineHeight: "170%" }}>
            <ListItem textSize="inherit">Michael J. Fox</ListItem>
            <ListItem textSize="inherit">Muhammad Ali</ListItem>
            <ListItem textSize="inherit">Stephen Hawking</ListItem>
          </List>
        </Fit>
        <Fit style={{ flex: 1, position: "relative", overflow: "hidden" }}>
          <Image
            alt="Michael J. Fox"
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
