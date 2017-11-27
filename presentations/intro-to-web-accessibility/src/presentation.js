// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Slide } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import IntroCover from "./slides/Intro/IntroCover";

import AccessibilityCover from "./slides/Accessibility/AccessibilityCover";
import WebFundamentals from "./slides/Accessibility/WebFundamentals";
import WhoDoesThisAffect from "./slides/Accessibility/WhoDoesThisAffect";
import IranStats from "./slides/Accessibility/IranStats";

import StandardsCover from "./slides/Standards/StandardsCover";

import SomeExamplesCover from "./slides/SomeExamples/SomeExamplesCover";

import ResourcesCover from "./slides/Resources/ResourcesCover";

import QnACover from "./slides/QnA/QnACover";
import MiscQnA from "./slides/QnA/MiscQnA";

import ThankYouCover from "./slides/ThankYou/ThankYouCover";
import InclusiveIran from "./slides/ThankYou/InclusiveIran";

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
theme.screen.global.body.lineHeight = "200%";

// console.log("theme", theme);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        {/* Introduction */}
        <Slide>
          <IntroCover />
          {/* WhoAmI */}
          {/* MySkills */}
          {/* Brands */}
        </Slide>
        {/* Accessibility */}
        <Slide
          transition={["slide", "zoom"]}
          transitionOut={["slide"]}
          bgColor="secondary"
        >
          <AccessibilityCover />
        </Slide>
        <Slide bgColor="tertiary">
          <WebFundamentals />
          {/* WHO DOES THIS AFFECT? 20% (NEARLY 20% OF PEOPLE LIVING IN THE US, UK AND 
          AUSTRALIA HAVE A DISABILITY) */}
          {/* Visual */}
          {/* Auditory */}
          {/* Physical */}
          {/* Cognitive */}
          {/* HOW DO PEOPLE WITH DISABILITIES USE THE WEB? Assistive Technologies, Adaptive Strategies */}
          {/* ASSISTIVE TECHNOLOGIES: Screen Readers, Zooming, Hardware */}
          {/* COMPONENTS OF WEB ACCESSIBILITY */}
          {/* SEMANTIC MARKUP */}
          {/* Standards */}
        </Slide>
        <Slide>
          <WhoDoesThisAffect />
        </Slide>
        <Slide>
          <IranStats />
        </Slide>
        <Slide
          transition={["slide", "zoom"]}
          transitionOut={["slide"]}
          bgColor="secondary"
        >
          <StandardsCover />
          {/* GUIDELINES AND STANDARDS */}
          {/* Standards: Something set up and established by an authority as a rule for the 
          measure of quantity, weight, extent, value, or **quality**. */}
          {/* Standards: Some common examples */}
          {/* Are there web standards? */}
          {/* Web & Digital Standards: W3C, WHATWG (Web Hypertext Application Technology 
          Working Group), ISO (International Organization for Standardization), Ecma 
          International, ADA, Section 508, etc. */}
          {/* So Why Standards? 1. Provides a common language 
          2. Sets expectations 3. Enables compatibility */}
          {/* Design Patterns: Design patterns are recurring solutions that 
          solve common design problems */}
          {/* Design patterns in real life: Buildings (House or skyscraper they all 
          follow same fundamental building process of foundation > frame > roof > etc), 
          Doors (There are many ways to get into a building while using different types 
          of doors, but they all follow similar design patterns, e.g. push/pull or 
          go around counter-clockwise) */}
          {/* What happens if we change the design pattern? */}
          {/* How does any of this relate to inclusive design and accessibility? */}
          {/* Before we answer that, let's test ourselves... */}
          {/* If we didn’t follow standards and patterns accessibility would be very difficult! */}
          {/* So where do we start? Ask the right questions: 1. Talk through the experience 
          2. Talk through design 3. Do we understand the implementation */}
          {/* A bad modal pattern */}
          {/* A good modal pattern */}
          {/* LET’S LOOK AT SOME EXAMPLES */}
          {/* W3C Design Patterns: TOOL TIP */}
          {/* W3C Design Patterns: DATE PICKER */}
          {/* I CAN’T FIND ONE THAT FOLLOWS THE SPECS! :( */}
          {/* ARIA */}
          {/* WEB ACCESSIBILITY POLICY AND LEGISLATION */}
          {/* COMPANIES THAT HAVE BEEN SUED SINCE 2007 */}
          {/* 12 WCAG 2.0 GUIDELINES */}
          {/* Perceivable1 */}
          {/* Perceivable2 */}
          {/* Perceivable3 */}
          {/* Perceivable4 */}
          {/* Operable1 */}
          {/* Operable2 */}
          {/* Operable3 */}
          {/* Operable4 */}
          {/* Understandable1 */}
          {/* Understandable2 */}
          {/* Understandable3 */}
          {/* Robust */}
          {/* WCAG 2.0 CONFORMANCE LEVELS (Layman's Version) */}
          {/* EVALUATING WEB ACCESSIBILITY */}
          {/* AUDITING TOOLS */}
          {/* Adding accessibility to our process */}
          {/* Common pitalls */}
          {/* THIS IS WELL BEYOND THE “ALT” ATTRIBUTE */}
        </Slide>
        {/* SomeExamples */}
        <Slide
          transition={["slide", "zoom"]}
          transitionOut={["slide"]}
          bgColor="secondary"
        >
          <SomeExamplesCover />
          {/* MarketWatch.com */}
          {/* Southwest.com */}
          {/* Express.com */}
          {/* VisitMt.com */}
          {/* Apple Account */}
          {/* Twitter */}
        </Slide>
        {/* Resources */}
        <Slide
          transition={["slide", "zoom"]}
          transitionOut={["slide"]}
          bgColor="secondary"
        >
          <ResourcesCover />
        </Slide>
        {/* QnA */}
        <Slide
          transition={["slide", "zoom"]}
          transitionOut={["slide"]}
          bgColor="secondary"
        >
          <QnACover />
        </Slide>
        <Slide bgColor="tertiary">
          <MiscQnA />
        </Slide>
        {/* ThankYou */}
        <Slide
          transition={["slide", "zoom"]}
          transitionOut={["slide"]}
          bgColor="secondary"
        >
          <ThankYouCover />
        </Slide>
        <Slide bgColor="tertiary">
          <InclusiveIran />
        </Slide>
      </Deck>
    );
  }
}
