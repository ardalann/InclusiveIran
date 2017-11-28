import React from "react";
import { Heading } from "spectacle";

import Wrapper from "../../components/Wrapper";

export default class ChangingDesignPattern extends React.Component {
  render() {
    return (
      <Wrapper>
        <Heading size={1} textSize="1.2em" textColor="primary">
          اگر الگوی طراحی را تغییر دهیم چه اتفاقی می افتد؟
        </Heading>
      </Wrapper>
    );
  }
}
