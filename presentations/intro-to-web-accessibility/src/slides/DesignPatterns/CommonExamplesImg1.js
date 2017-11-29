import React from "react";
import { Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import ExampleDoor1Img from "../../assets/example-door1.png";

export default class CommonExamplesImg1 extends React.Component {
  render() {
    return (
      <Wrapper>
        <Image
          alt="A door that can be pushed or pulled"
          src={ExampleDoor1Img}
          width="800"
          height="auto"
        />
      </Wrapper>
    );
  }
}
