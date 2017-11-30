import React from "react";
import { Heading } from "spectacle";

import Wrapper from "../../components/Wrapper";

export default class WhereDoWeGoFromHere extends React.Component {
  render() {
    return (
      <Wrapper>
        <Heading size={1} fit textSize="1.2em" textColor="primary">
          از اینجا به بعد چکار باید کرد؟
        </Heading>
      </Wrapper>
    );
  }
}
