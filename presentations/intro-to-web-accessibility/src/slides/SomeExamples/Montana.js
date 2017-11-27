import React from "react";
import { Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import img from "../../assets/example-montana.png";

export default class Montana extends React.Component {
  render() {
    return (
      <Wrapper>
        <Image
          alt="visitmt.com – Bad example"
          src={img}
          width="1223"
          height="925"
          style={{ height: "auto" }}
        />
      </Wrapper>
    );
  }
}
