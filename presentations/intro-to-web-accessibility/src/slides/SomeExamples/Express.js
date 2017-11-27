import React from "react";
import { Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import img from "../../assets/example-express.gif";

export default class Express extends React.Component {
  render() {
    return (
      <Wrapper>
        <Image
          alt="express.com – Bad example"
          src={img}
          width="1223"
          height="925"
          style={{ height: "auto" }}
        />
      </Wrapper>
    );
  }
}
