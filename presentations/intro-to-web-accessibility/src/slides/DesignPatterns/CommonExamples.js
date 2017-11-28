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
          الگوهای طراحی راه حل هایی هستند که به تکرار برای حل مسائل متداول طراحی
          استفاده میشن.
        </SlideHeading>
        <List>
          <ListItem>ساختمان ها</ListItem>
          <ListItem>قاشق و چنگال</ListItem>
          <ListItem>درب ها</ListItem>
        </List>
      </Wrapper>
    );
  }
}
