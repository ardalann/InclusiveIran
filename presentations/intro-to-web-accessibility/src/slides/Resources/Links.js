import React from "react";
import { List, S, Link } from "spectacle";

import Wrapper from "../../components/Wrapper";
import SlideHeading from "../../components/SlideHeading";
import ListItem from "../../components/ListItem";

export default class Links extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideHeading>یادگیری / منابع</SlideHeading>
        <List
          textSize="0.8em"
          style={{
            direction: "ltr",
            textAlign: "left !important",
            lineHeight: "170%"
          }}
        >
          <ListItem>
            WebAIM (<Link href="webaim.org" target="_blank">
              webaim.org
            </Link>)
          </ListItem>
          <ListItem>
            W3C (<Link href="https://www.w3.org/WAI/ER/tools/" target="_blank">
              w3.org/WAI/ER/tools
            </Link>)
          </ListItem>
          <ListItem>
            Twitter (<Link
              href="https://twitter.com/hashtag/a11y"
              target="_blank"
            >
              twitter.com/hashtag/a11y{" "}
            </Link>)
          </ListItem>
        </List>
      </Wrapper>
    );
  }
}
