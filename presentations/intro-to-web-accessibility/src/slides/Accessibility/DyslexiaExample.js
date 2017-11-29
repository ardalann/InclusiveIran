import React from "react";
import { Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import img from "../../assets/dyslexia-example.gif";

export default class DyslexiaExample extends React.Component {
  render() {
    return (
      <Wrapper>
        <Image alt="Dyslexia example" src={img} width="781" height="auto" />
      </Wrapper>
    );
  }
}
