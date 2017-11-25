import React from "react";
import { Heading, Text } from "spectacle";

import Wrapper from "../../components/Wrapper";

export default class ThankYouCover extends React.Component {
  render() {
    return (
      <Wrapper>
        <Heading size={2} margin="0 0 2em 0" textColor="primary">
          متشکرم!
        </Heading>
        <Text textColor="primary">و حالا یک سوپرایز...</Text>
      </Wrapper>
    );
  }
}
