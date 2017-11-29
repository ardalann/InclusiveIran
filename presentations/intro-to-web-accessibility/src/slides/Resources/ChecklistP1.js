import React from "react";
import { Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import img from "../../assets/checklist-p1.png";

export default class ChecklistP1 extends React.Component {
  render() {
    return (
      <Wrapper>
        <Image
          alt="Accessibility checklist - Page 1"
          src={img}
          width="auto"
          height="700"
        />
      </Wrapper>
    );
  }
}
