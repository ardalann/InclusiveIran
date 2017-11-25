// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Slide } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import IntroCoverSlide from "./slides/Intro/IntroCover";

import AccessibilityCoverSlide from "./slides/Accessibility/AccessibilityCover";

import StandardsCoverSlide from "./slides/Standards/StandardsCover";

import SomeExamplesCoverSlide from "./slides/SomeExamples/SomeExamplesCover";

import ResourcesCoverSlide from "./slides/Resources/ResourcesCover";

import QnACoverSlide from "./slides/QnA/QnACover";
import MiscQnASlide from "./slides/QnA/MiscQnA";

import ThankYouCoverSlide from "./slides/ThankYou/ThankYouCover";
import InclusiveIranSlide from "./slides/ThankYou/InclusiveIran";

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
          <AccessibilityCoverSlide />
          {/* The Web is fundamentally designed to work for all people, whatever their hardware, 
          software, language, culture, location, or physical or mental ability. */}
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
        </Slide>
        {/* Standards */}
        <Slide
          transition={["slide", "zoom"]}
          transitionOut={["slide"]}
          bgColor="secondary"
        >
          <StandardsCoverSlide />
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
          <SomeExamplesCoverSlide />
        </Slide>
        {/* Resources */}
        <Slide
          transition={["slide", "zoom"]}
          transitionOut={["slide"]}
          bgColor="secondary"
        >
          <ResourcesCoverSlide />
        </Slide>
        {/* QnA */}
        <Slide
          transition={["slide", "zoom"]}
          transitionOut={["slide"]}
          bgColor="secondary"
        >
          <QnACoverSlide />
        </Slide>
        <Slide bgColor="tertiary">
          <MiscQnASlide />
        </Slide>
        {/* ThankYou */}
        <Slide
          transition={["slide", "zoom"]}
          transitionOut={["slide"]}
          bgColor="secondary"
        >
          <ThankYouCoverSlide />
        </Slide>
        <Slide bgColor="tertiary">
          <InclusiveIranSlide />
        </Slide>
      </Deck>
    );
  }
}
