import React from "react";
import { Heading } from "spectacle";

const SlideHeading = props => (
  <Heading
    {...props}
    size={1}
    lineHeight={1.7}
    textSize="0.7em"
    style={{ paddingBottom: "0.2em" }}
  />
);

export default SlideHeading;
