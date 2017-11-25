// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Slide } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import IntroCoverSlide from "./slides/Intro/IntroCover";
import AccessibilityCoverSlide from "./slides/Accessibility/AccessibilityCover";
import StandardsCoverSlide from "./slides/Standards/StandardsCover";
import GoodExamplesCoverSlide from "./slides/GoodExamples/GoodExamplesCover";
import BadExamplesCoverSlide from "./slides/BadExamples/BadExamplesCover";
import ResourcesCoverSlide from "./slides/Resources/ResourcesCover";
import QnACoverSlide from "./slides/QnA/QnACover";
import MiscQnACoverSlide from "./slides/MiscQnA/MiscQnACover";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "IRANSans",
    secondary: "Lucida Grande"
  }
);

theme.screen.global.body.direction = "rtl";

// console.log("theme", theme);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        {/* Introduction */}
        <Slide>
          <IntroCoverSlide />
        </Slide>
        {/* Accessibility */}
        <Slide transition={["slide", "zoom"]} bgColor="secondary">
          <AccessibilityCoverSlide />
        </Slide>
        {/* Standards */}
        <Slide transition={["slide", "zoom"]} bgColor="secondary">
          <StandardsCoverSlide />
        </Slide>
        {/* GoodExamples */}
        <Slide transition={["slide", "zoom"]} bgColor="secondary">
          <GoodExamplesCoverSlide />
        </Slide>
        {/* BadExamples */}
        <Slide transition={["slide", "zoom"]} bgColor="secondary">
          <BadExamplesCoverSlide />
        </Slide>
        {/* Resources */}
        <Slide transition={["slide", "zoom"]} bgColor="secondary">
          <ResourcesCoverSlide />
        </Slide>
        {/* QnA */}
        <Slide transition={["slide", "zoom"]} bgColor="secondary">
          <QnACoverSlide />
        </Slide>
        {/* MiscQnA */}
        <Slide transition={["slide", "zoom"]} bgColor="tertiary">
          <MiscQnACoverSlide />
        </Slide>
      </Deck>
    );
  }
}
