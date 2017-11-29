import React from "react";
import { Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import SlideHeading from "../../components/SlideHeading";
import WebAccessibilityComponentsImg from "../../assets/web-accessibility-components.png";

export default class ComponentsOfWebAccessibility extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading>اجزای دسترسی پذیری وب</SlideHeading>
        <Image
          alt="Components of web accessibility: On one side we have developers who use authoring and evaluation tools, on the other side we have users who use assistive technologies and browsers or media players to view the content developers create."
          src={WebAccessibilityComponentsImg}
          width="800"
          height="auto"
          margin="2em auto 0"
        />
      </Wrapper>
    );
  }
}
