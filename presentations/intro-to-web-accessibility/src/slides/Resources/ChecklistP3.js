import React from "react";
import { Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import img from "../../assets/checklist-p3.png";

export default class ChecklistP3 extends React.Component {
  render() {
    return (
      <Wrapper>
        <Image
          alt="Accessibility checklist - Page 3"
          src={img}
          width="auto"
          height="700"
        />
      </Wrapper>
    );
  }
}
