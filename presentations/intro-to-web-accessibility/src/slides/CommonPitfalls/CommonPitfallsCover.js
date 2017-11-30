import React from "react";
import { Heading } from "spectacle";

import Wrapper from "../../components/Wrapper";

export default class CommonPitfallsCover extends React.Component {
  render() {
    return (
      <Wrapper>
        <Heading size={2} textColor="primary">
          اشتباهات رایج
        </Heading>
      </Wrapper>
    );
  }
}
