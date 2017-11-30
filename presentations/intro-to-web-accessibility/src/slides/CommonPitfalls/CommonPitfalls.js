import React from "react";
import { List, S } from "spectacle";

import Wrapper from "../../components/Wrapper";
import SlideHeading from "../../components/SlideHeading";
import ListItem from "../../components/ListItem";
import img from "../../assets/full-cycle.png";

export default class CommonPitfalls extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading>رایج ترین اشتباهات</SlideHeading>
        <List
          textSize="0.8em"
          style={{
            direction: "ltr",
            textAlign: "left !important",
            lineHeight: "170%"
          }}
        >
          <ListItem>Lack of scope and hours</ListItem>
          <ListItem>Lack of requirements</ListItem>
          <ListItem>Lack of reviews during the concept phase</ListItem>
          <ListItem>Lack of reviews during the UX phase</ListItem>
          <ListItem>Lack of reviews during the Creative Phase</ListItem>
          <ListItem>
            <S type="bold">
              Counting on a technology solution to the above ;-)
            </S>
          </ListItem>
          <ListItem>Relying on automated tests</ListItem>
          <ListItem>Lack of technical knowledge</ListItem>
          <ListItem>Lack of testing skills</ListItem>
          <ListItem>
            Lack of real world knowledge of how people with disabilities
            interact with the web
          </ListItem>
          <ListItem>The unknown… </ListItem>
        </List>
      </Wrapper>
    );
  }
}
