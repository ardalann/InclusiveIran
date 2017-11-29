import React from "react";
import { Image, Link } from "spectacle";

import Wrapper from "../../components/Wrapper";
import EnglishS from "../../components/EnglishS";
import SlideHeading from "../../components/SlideHeading";

import ScreenshotImg from "../../assets/w3c-standards.png";

export default class W3CStandards extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading style={{ fontWeight: "normal" }}>
          استاندارد های کنسرسیوم جهانی وب <EnglishS>(W3C)</EnglishS>
        </SlideHeading>
        <Image
          alt="W3C Standards"
          src={ScreenshotImg}
          width="1487"
          height="auto"
        />
        <Link href="https://www.w3.org/standards/">
          <EnglishS>w3.org/standards</EnglishS>
        </Link>
      </Wrapper>
    );
  }
}
