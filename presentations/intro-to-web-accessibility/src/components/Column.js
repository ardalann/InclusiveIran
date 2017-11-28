import React from "react";
import { Fit } from "spectacle";

const Column = ({ children }) => (
  <Fit style={{ flex: 1, paddingLeft: "0.5em" }}>{children}</Fit>
);

export default Column;
