import React from "react";
import { Image, Link } from "spectacle";

import Wrapper from "../../components/Wrapper";
import EnglishS from "../../components/EnglishS";
import SlideHeading from "../../components/SlideHeading";

import ScreenshotImg from "../../assets/w3c-design-standards.png";

export default class W3CDesignStandards extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading style={{ fontWeight: "normal" }}>
          استاندارد های طراحی و توسعه وب کنسرسیوم جهانی وب{" "}
          <EnglishS>(W3C)</EnglishS>
        </SlideHeading>
        <Image
          alt="W3C Design Standards"
          src={ScreenshotImg}
          width="1822"
          height="auto"
        />
        <Link href="https://www.w3.org/standards/design">
          <EnglishS>w3.org/standards/design</EnglishS>
        </Link>
      </Wrapper>
    );
  }
}
