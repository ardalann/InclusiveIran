import React from "react";
import { Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import SlideHeading from "../../components/SlideHeading";
import img from "../../assets/full-cycle.png";

export default class FullCycle extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading>
          دسترسی پذیری کامل<br />یعنی چرخه کامل
        </SlideHeading>
        <Image
          alt="Full accessibility equals full cycle"
          src={img}
          width="2600"
          height="auto"
          margin="2em 0 0"
        />
      </Wrapper>
    );
  }
}
