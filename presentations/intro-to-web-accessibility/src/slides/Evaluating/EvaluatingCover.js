import React from "react";
import { Heading } from "spectacle";

import Wrapper from "../../components/Wrapper";

export default class EvaluatingCover extends React.Component {
  render() {
    return (
      <Wrapper>
        <Heading size={2} fit textColor="primary">
          سنجش دسترسی پذیری وب
        </Heading>
      </Wrapper>
    );
  }
}
