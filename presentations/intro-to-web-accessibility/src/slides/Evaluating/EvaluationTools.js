import React from "react";
import { Heading, List, ListItem, Layout, Fit, Image } from "spectacle";

import ExampleImg from "../../assets/evaluating.png";

export default class EvaluationTools extends React.Component {
  render() {
    return (
      <Layout>
        <Fit style={{ flex: 1 }}>
          <Heading size={6} lineHeight={1.7}>
            ابزار ارزیابی
          </Heading>
          <List
            textSize="0.65em"
            style={{
              lineHeight: "170%",
              direction: "ltr",
              textAlign: "left !important",
              paddingLeft: "1em"
            }}
          >
            <ListItem textSize="inherit">
              aXe (Browser extension, NPM module)
            </ListItem>
            <ListItem textSize="inherit">WAVE</ListItem>
            <ListItem textSize="inherit">IDI Checker</ListItem>
            <ListItem textSize="inherit">TAW</ListItem>
            <ListItem textSize="inherit">Pa11y</ListItem>
            <ListItem textSize="inherit">Color Contrast Checker</ListItem>
            <ListItem textSize="inherit">WCAG 2.0 Quick Reference</ListItem>
            <ListItem textSize="inherit">Web Accessibility Toolbar</ListItem>
          </List>
        </Fit>
        <Fit style={{ flex: 1, position: "relative", overflow: "hidden" }}>
          <Image
            alt=""
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
