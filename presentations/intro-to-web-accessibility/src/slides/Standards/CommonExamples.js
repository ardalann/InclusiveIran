import React from "react";
import { Text, List } from "spectacle";

import Wrapper from "../../components/Wrapper";
import SlideHeading from "../../components/SlideHeading";
import ListItem from "../../components/ListItem";

export default class CommonExamples extends React.Component {
  render() {
    return (
      <Wrapper>
        <Text>چند نمونه متداول</Text>
        <SlideHeading>
          استانداردها تقریبا توی تمام بخش های زندگی ما پیدا میشن
        </SlideHeading>
        <List>
          <ListItem>چراغ راهنمایی</ListItem>
          <ListItem>اهرم چراغ راهنمای ماشین</ListItem>
          <ListItem>پیچ و مهره</ListItem>
          <ListItem>و ...</ListItem>
        </List>
      </Wrapper>
    );
  }
}
