import React from "react";
import { Heading } from "spectacle";

import Wrapper from "../../components/Wrapper";

export default class HowDoesItAffectUsCover extends React.Component {
  render() {
    return (
      <Wrapper>
        <Heading size={2} fit textColor="primary">
          این موضوع چه تاثیری روی کار ما می گذارد؟
        </Heading>
      </Wrapper>
    );
  }
}
