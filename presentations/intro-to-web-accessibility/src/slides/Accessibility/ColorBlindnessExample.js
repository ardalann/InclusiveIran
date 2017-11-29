import React from "react";
import { Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import img from "../../assets/colorblind-example.png";

export default class ColorBlindnessExample extends React.Component {
  render() {
    return (
      <Wrapper>
        <Image
          alt="Color Blindness example"
          src={img}
          width="781"
          height="auto"
        />
      </Wrapper>
    );
  }
}
