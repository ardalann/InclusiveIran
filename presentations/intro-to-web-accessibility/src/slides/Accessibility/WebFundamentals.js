import React from "react";
import { Text, S } from "spectacle";

import Wrapper from "../../components/Wrapper";

export default class WebFundamentals extends React.Component {
  render() {
    /**
     * The Web is fundamentally designed to work for all people, whatever their hardware, 
     * software, language, culture, location, or physical or mental ability.
     */
    return (
      <Wrapper>
        <Text textColor="primary">
          <S type="" style={{ opacity: 0.8 }}>
            وب اساسا طوری طراحی شده که برای{" "}
          </S>
          همه مردم با هر سخت افزار، نرم افزار، زبان، فرهنگ، موقعیت جغرافیایی یا
          توانایی فیزیکی یا ذهنی<S type="" style={{ opacity: 0.8 }}>
            {" "}
            کار کنه.
          </S>
        </Text>
      </Wrapper>
    );
  }
}
