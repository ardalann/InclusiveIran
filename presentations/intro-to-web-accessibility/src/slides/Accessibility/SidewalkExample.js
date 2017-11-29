import React from "react";
import { Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import img from "../../assets/accessible-sidewalk.jpg";

export default class SidewalkExample extends React.Component {
  render() {
    return (
      <Wrapper>
        <Image
          alt="An accessible sidewalk"
          src={img}
          width="1024"
          height="auto"
        />
      </Wrapper>
    );
  }
}
