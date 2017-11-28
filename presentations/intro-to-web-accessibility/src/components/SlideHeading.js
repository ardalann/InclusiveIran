import React from "react";
import { Heading } from "spectacle";

const SlideHeading = ({ style, ...props }) => (
  <Heading
    size={1}
    lineHeight={1.7}
    textSize="0.7em"
    style={Object.assign(style || {}, { paddingBottom: "0.2em" })}
    {...props}
  />
);

export default SlideHeading;
