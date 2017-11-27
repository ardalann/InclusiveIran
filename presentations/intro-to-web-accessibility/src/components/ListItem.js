import React from "react";
import { ListItem as OriginalListItem, S } from "spectacle";

const ListItem = ({ en, children, ...props }) => (
  <OriginalListItem {...props} textSize="inherit">
    <S
      type=""
      style={{
        direction: en ? "ltr" : "inherit",
        display: "inline-block",
        verticalAlign: "top",
        maxWidth: "90%"
      }}
    >
      {children}
    </S>
  </OriginalListItem>
);

export default ListItem;
