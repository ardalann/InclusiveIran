import React from "react";
import { Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import SlideHeading from "../../components/SlideHeading";
import img from "../../assets/policy-legislations.png";

export default class PoliciesAndLegislations extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading>سیاست ها و قوانین دسترسی پذیری وب</SlideHeading>
        <Image
          alt="Web accessibility policies and legislations"
          src={img}
          width="2664"
          height="auto"
          margin="2em 0 0"
        />
      </Wrapper>
    );
  }
}
