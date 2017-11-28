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
import Visual from "./slides/Accessibility/Visual";
import Auditory from "./slides/Accessibility/Auditory";
import Physical from "./slides/Accessibility/Physical";
import Mental from "./slides/Accessibility/Mental";
import HowDoTheyUseWeb from "./slides/Accessibility/HowDoTheyUseWeb";
import AssistiveTechnologies from "./slides/Accessibility/AssistiveTechnologies";
import ComponentsOfWebAccessibility from "./slides/Accessibility/ComponentsOfWebAccessibility";
import SemanticMarkup from "./slides/Accessibility/SemanticMarkup";

import DesignPatternsCover from "./slides/DesignPatterns/DesignPatternsCover";
import DesignPatternsCommonExamples from "./slides/DesignPatterns/CommonExamples";
import CommonExamplesImg1 from "./slides/DesignPatterns/CommonExamplesImg1";
import CommonExamplesImg2 from "./slides/DesignPatterns/CommonExamplesImg2";
import ChangingDesignPattern from "./slides/DesignPatterns/ChangingDesignPattern";
import CommonExamplesImg3 from "./slides/DesignPatterns/CommonExamplesImg3";

import StandardsCover from "./slides/Standards/StandardsCover";
import CommonExamples from "./slides/Standards/CommonExamples";

import SomeExamplesCover from "./slides/SomeExamples/SomeExamplesCover";
import Marketwatch from "./slides/SomeExamples/Marketwatch";
import Southwest from "./slides/SomeExamples/Southwest";
import Express from "./slides/SomeExamples/Express";
import Montana from "./slides/SomeExamples/Montana";
import Apple from "./slides/SomeExamples/Apple";
import Twitter from "./slides/SomeExamples/Twitter";

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
theme.screen.global.ul = { textAlign: "right !important" };

// console.log("theme", theme);

const coverSlideProps = {
  transition: ["slide", "zoom"],
  transitionOut: ["slide"],
  bgColor: "secondary"
};

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
        <Slide {...coverSlideProps}>
          <AccessibilityCover />
        </Slide>
        <Slide bgColor="tertiary">
          <WebFundamentals />
        </Slide>
        <Slide>
          <WhoDoesThisAffect />
        </Slide>
        <Slide>
          <IranStats />
        </Slide>
        <Slide>
          <Visual />
        </Slide>
        <Slide>
          <Auditory />
        </Slide>
        <Slide>
          <Physical />
        </Slide>
        <Slide>
          <Mental />
        </Slide>
        <Slide>
          <HowDoTheyUseWeb />
        </Slide>
        <Slide>
          <AssistiveTechnologies />
        </Slide>
        <Slide>
          <ComponentsOfWebAccessibility />
        </Slide>
        <Slide>
          <SemanticMarkup />
        </Slide>
        <Slide {...coverSlideProps}>
          <DesignPatternsCover />
        </Slide>
        <Slide>
          <DesignPatternsCommonExamples />
        </Slide>
        <Slide>
          <CommonExamplesImg1 />
        </Slide>
        <Slide>
          <CommonExamplesImg2 />
        </Slide>
        <Slide bgColor="tertiary">
          <ChangingDesignPattern />
        </Slide>
        <Slide>
          <CommonExamplesImg3 />
        </Slide>
        <Slide {...coverSlideProps}>
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
        <Slide>
          <CommonExamples />
        </Slide>
        {/* SomeExamples */}
        <Slide {...coverSlideProps}>
          <SomeExamplesCover />
        </Slide>
        <Slide>
          <Marketwatch />
        </Slide>
        <Slide>
          <Southwest />
        </Slide>
        <Slide>
          <Express />
        </Slide>
        <Slide>
          <Montana />
        </Slide>
        <Slide>
          <Apple />
        </Slide>
        <Slide>
          <Twitter />
        </Slide>
        {/* Resources */}
        <Slide {...coverSlideProps}>
          <ResourcesCover />
        </Slide>
        {/* QnA */}
        <Slide {...coverSlideProps}>
          <QnACover />
        </Slide>
        <Slide bgColor="tertiary">
          <MiscQnA />
        </Slide>
        {/* ThankYou */}
        <Slide {...coverSlideProps}>
          <ThankYouCover />
        </Slide>
        <Slide bgColor="tertiary">
          <InclusiveIran />
        </Slide>
      </Deck>
    );
  }
}
