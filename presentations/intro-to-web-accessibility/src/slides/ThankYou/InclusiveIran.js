import React from "react";
import { Text, S, Link } from "spectacle";

import Wrapper from "../../components/Wrapper";

export default class InclusiveIran extends React.Component {
  render() {
    return (
      <Wrapper>
        <Link href="https://inclusiveiran.com" target="_blank">
          <Text fit textColor="primary" textFont="'American Typewriter'">
            Inclusive<S type="" style={{ opacity: 0.8 }}>
              <S type="" style={{ padding: "0 0.15em" }}>
                Iran
              </S>
              <S type="" textSize="0.6em">
                .com
              </S>
            </S>
          </Text>
        </Link>
        <Link href="https://github.com/ardalann/InclusiveIran">
          <Text
            fit
            textColor="primary"
            textFont="'American Typewriter'"
            style={{ opacity: 0.7 }}
          >
            https://github.com/ardalann/InclusiveIran
          </Text>
        </Link>
      </Wrapper>
    );
  }
}
