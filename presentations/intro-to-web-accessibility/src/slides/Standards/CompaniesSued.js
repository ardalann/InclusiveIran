import React from "react";
import { Image } from "spectacle";

import Wrapper from "../../components/Wrapper";
import SlideHeading from "../../components/SlideHeading";
import img from "../../assets/companies-sued.png";

export default class CompaniesSued extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading>
          برخی از شرکت هایی که از سال ۲۰۰۷ تاکنون بدلیل داشتن سایت غیر دسترسی
          پذیر<br />
          وادار به پرداخت غرامت شده اند:
          <br />
          <br />
        </SlideHeading>
        <Image
          alt="Companies sued for not having accessible websites"
          src={img}
          width="1405"
          height="auto"
        />
      </Wrapper>
    );
  }
}
