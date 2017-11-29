import React from "react";
import { Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import img from "../../assets/accessible-parking.jpg";

export default class ParkingExample extends React.Component {
  render() {
    return (
      <Wrapper>
        <Image
          alt="An accessible parking"
          src={img}
          width="1440"
          height="auto"
        />
      </Wrapper>
    );
  }
}
