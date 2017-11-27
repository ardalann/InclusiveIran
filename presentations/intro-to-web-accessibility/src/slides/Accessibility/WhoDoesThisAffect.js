import React from "react";
import { Heading, Text, S } from "spectacle";

import Wrapper from "../../components/Wrapper";

export default class WhoDoesThisAffect extends React.Component {
  render() {
    return (
      <Wrapper>
        <Heading size={6} lineHeight={1.7}>
          چه کسانی تحت تاثیر این موضوع قرار می گیرن؟
        </Heading>
        <Heading size={1} lineHeight={1.7} color="secondary" margin="0.2em 0">
          ٪۲۰
        </Heading>
        <Text>
          حدود ۲۰ درصد جمعیت کشورهای آمریکا، انگلستان و استرالیا حداقل یک نوع
          معلولیت دارند.
        </Text>
        <Text textSize="0.5em" margin="0.5em 0 0">
          منابع: United Nations Enable, Census.gov, SDAC, Papworth Trust
        </Text>
      </Wrapper>
    );
  }
}
