import React from "react";
import { Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import SlideHeading from "../../components/SlideHeading";
import img from "../../assets/guidelines-standards.png";

export default class GuidelinesAndStandards extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading>دستورالعمل ها و استانداردها</SlideHeading>
        <Image
          alt="Web accessibility guidelines and standards"
          src={img}
          width="2626"
          height="auto"
          margin="2em 0 0"
        />
      </Wrapper>
    );
  }
}
