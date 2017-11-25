import React from "react";
import { Heading, S } from "spectacle";

import Wrapper from "../../components/Wrapper";

export default class SomeExamplesCover extends React.Component {
  render() {
    return (
      <Wrapper>
        <Heading size={2} lineHeight={1.7} textColor="primary">
          چند نمونه<br />{" "}
          <S type="bold" textColor="green">
            خوب
          </S>{" "}
          و{" "}
          <S type="bold" textColor="red">
            بد
          </S>
        </Heading>
      </Wrapper>
    );
  }
}
