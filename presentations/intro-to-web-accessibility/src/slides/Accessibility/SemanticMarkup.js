import React from "react";
import { Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import SlideHeading from "../../components/SlideHeading";
import EnglishS from "../../components/EnglishS";
import SemanticMarkupImg from "../../assets/semantic-markup.png";

export default class SemanticMarkup extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading>
          نشانه گذاری معنایی <br />
          <EnglishS>Semantic Markup</EnglishS>
        </SlideHeading>
        <Image
          alt="Example semantic markup"
          src={SemanticMarkupImg}
          width="640"
          height="334"
          margin="2em auto 0"
        />
      </Wrapper>
    );
  }
}
