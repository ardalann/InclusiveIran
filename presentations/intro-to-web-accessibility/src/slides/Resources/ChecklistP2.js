import React from "react";
import { Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import img from "../../assets/checklist-p2.png";

export default class ChecklistP2 extends React.Component {
  render() {
    return (
      <Wrapper>
        <Image
          alt="Accessibility checklist - Page 2"
          src={img}
          width="auto"
          height="700"
        />
      </Wrapper>
    );
  }
}
