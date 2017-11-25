import React from "react";
import { Heading, S } from "spectacle";

import Wrapper from "../../components/Wrapper";

export default class BadExamplesCover extends React.Component {
  render() {
    return (
      <Wrapper>
        <Heading size={2} textColor="primary">
          نمونه های{" "}
          <S type="bold" textColor="red">
            بد
          </S>
        </Heading>
      </Wrapper>
    );
  }
}
