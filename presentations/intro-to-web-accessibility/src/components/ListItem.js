import React from "react";
import { List } from "spectacle";

const ListItem = ({ en, ...props }) => (
  <List
    {...props}
    textSize="inherit"
    style={{ direction: en ? "ltr" : "inherit" }}
  />
);

export default ListItem;
