import React from "react";
import { Heading, Text } from "spectacle";

import Wrapper from "../../components/Wrapper";

export default class IntroCover extends React.Component {
  render() {
    return (
      <Wrapper>
        <Heading size={5} lineHeight={1.7} textColor="secondary">
          آشنایی با
        </Heading>
        <Heading size={2} lineHeight={1.7} textColor="secondary">
          دسترسی پذیری وب
        </Heading>
        <Heading size={6} lineHeight={1.7} textColor="secondary">
          (Web Accessibility)
        </Heading>
        <Text margin="70px 0 0" textColor="tertiary" size={2}>
          اردلان نقشینه
        </Text>
        <Text margin="30px 0 0" textColor="quartenary" size={1}>
          تهران، دانشگاه امیرکبیر | ۹ آذر ۱۳۹۶
        </Text>
      </Wrapper>
    );
  }
}
