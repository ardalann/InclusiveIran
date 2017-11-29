import React from "react";
import { Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import ExampleDoor2Img from "../../assets/example-door2.png";

export default class CommonExamplesImg2 extends React.Component {
  render() {
    return (
      <Wrapper>
        <Image
          alt="A revolving door"
          src={ExampleDoor2Img}
          width="800"
          height="auto"
        />
      </Wrapper>
    );
  }
}
