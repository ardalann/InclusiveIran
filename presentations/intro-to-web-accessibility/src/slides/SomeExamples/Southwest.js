import React from "react";
import { Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import img from "../../assets/example-southwest.gif";

export default class Southwest extends React.Component {
  render() {
    return (
      <Wrapper>
        <Image
          alt="southwest.com – Good example"
          src={img}
          width="1223"
          height="925"
          style={{ height: "auto" }}
        />
      </Wrapper>
    );
  }
}
