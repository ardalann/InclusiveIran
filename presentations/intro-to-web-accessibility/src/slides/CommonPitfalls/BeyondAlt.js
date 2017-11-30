import React from "react";
import { Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import SlideHeading from "../../components/SlideHeading";
import EnglishS from "../../components/EnglishS";
import img from "../../assets/beyond-alt.png";

export default class BeyondAlt extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading>
          دسترسی پذیری خیلی بیشتر از یک صفت <EnglishS>ALT</EnglishS> است
        </SlideHeading>
        <Image
          alt="THIS IS WELL BEYOND THE “ALT” ATTRIBUTE"
          src={img}
          width="1664"
          height="auto"
          margin="2em 0 0"
        />
      </Wrapper>
    );
  }
}
