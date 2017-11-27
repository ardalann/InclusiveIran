import React from "react";
import { Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import img from "../../assets/example-apple.png";

export default class Apple extends React.Component {
  render() {
    return (
      <Wrapper>
        <Image
          alt="apple.com – Bad example"
          src={img}
          width="1223"
          height="925"
          style={{ height: "auto" }}
        />
      </Wrapper>
    );
  }
}
