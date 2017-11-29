import React from "react";
import { Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import img from "../../assets/wcag-conformance-levels.png";

export default class WCAGConformanceLevels extends React.Component {
  render() {
    return (
      <Wrapper>
        <Image
          alt="WCAG Conformance Levels"
          src={img}
          width="1459"
          height="auto"
        />
      </Wrapper>
    );
  }
}
