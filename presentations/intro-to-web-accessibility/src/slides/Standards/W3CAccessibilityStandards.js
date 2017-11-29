import React from "react";
import { Image, Link } from "spectacle";

import Wrapper from "../../components/Wrapper";
import EnglishS from "../../components/EnglishS";
import SlideHeading from "../../components/SlideHeading";

import ScreenshotImg from "../../assets/w3c-accessibility-standards.png";

export default class W3CAccessibilityStandards extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading style={{ fontWeight: "normal" }}>
          استاندارد ها، دستورالعمل ها و تکنیک های دسترسی پذیری کنسرسیوم جهانی وب{" "}
          <EnglishS>(W3C)</EnglishS>
        </SlideHeading>
        <Image
          alt="W3C Accessibility Standards"
          src={ScreenshotImg}
          width="859"
          height="auto"
          margin="3.5em 0"
        />
        <Link href="https://www.w3.org/standards/webdesign/accessibility">
          <EnglishS>w3.org/standards/webdesign/accessibility</EnglishS>
        </Link>
      </Wrapper>
    );
  }
}
