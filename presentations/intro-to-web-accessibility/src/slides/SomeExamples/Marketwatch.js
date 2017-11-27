import React from "react";
import { Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import img from "../../assets/example-marketwatch.png";

export default class Marketwatch extends React.Component {
  render() {
    return (
      <Wrapper>
        <Image
          alt="marketwatch.com – Bad example"
          src={img}
          width="1233"
          height="1021"
          style={{ height: "auto" }}
        />
      </Wrapper>
    );
  }
}
