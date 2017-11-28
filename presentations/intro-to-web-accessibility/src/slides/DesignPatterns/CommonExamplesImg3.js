import React from "react";
import { Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import ExampleDoor3Img from "../../assets/example-door3.png";

export default class CommonExamplesImg3 extends React.Component {
  render() {
    return (
      <Wrapper>
        <Image
          alt="An automatic revolving door"
          src={ExampleDoor3Img}
          width="640"
          height="427"
        />
      </Wrapper>
    );
  }
}
