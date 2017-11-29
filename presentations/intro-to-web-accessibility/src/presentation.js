// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Slide } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import IntroCover from "./slides/Intro/IntroCover";

import AccessibilityCover from "./slides/Accessibility/AccessibilityCover";
import WebFundamentals from "./slides/Accessibility/WebFundamentals";
import SidewalkExample from "./slides/Accessibility/SidewalkExample";
import AccessibleParkingExample from "./slides/Accessibility/ParkingExample";
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
import W3CStandards from "./slides/Standards/W3CStandards";
import W3CDesignStandards from "./slides/Standards/W3CDesignStandards";
import W3CAccessibilityStandards from "./slides/Standards/W3CAccessibilityStandards";
import CompaniesSued from "./slides/Standards/CompaniesSued";
import WCAGPrinciples from "./slides/Standards/WCAGPrinciples";
import WCAGPrinciple1 from "./slides/Standards/WCAGPrinciple1";
import WCAGPrinciple2 from "./slides/Standards/WCAGPrinciple2";
import WCAGPrinciple3 from "./slides/Standards/WCAGPrinciple3";
import WCAGPrinciple4 from "./slides/Standards/WCAGPrinciple4";
import WCAGGuideline11 from "./slides/Standards/WCAGGuideline11";
import WCAGGuideline12 from "./slides/Standards/WCAGGuideline12";
import WCAGGuideline13 from "./slides/Standards/WCAGGuideline13";
import WCAGGuideline14 from "./slides/Standards/WCAGGuideline14";
import WCAGGuideline21 from "./slides/Standards/WCAGGuideline21";
import WCAGGuideline22 from "./slides/Standards/WCAGGuideline22";
import WCAGGuideline23 from "./slides/Standards/WCAGGuideline23";
import WCAGGuideline24 from "./slides/Standards/WCAGGuideline24";
import WCAGGuideline31 from "./slides/Standards/WCAGGuideline31";
import WCAGGuideline32 from "./slides/Standards/WCAGGuideline32";
import WCAGGuideline33 from "./slides/Standards/WCAGGuideline33";
import WCAGGuideline41 from "./slides/Standards/WCAGGuideline41";
import WCAGConformanceLevels from "./slides/Standards/WCAGConformanceLevels";

import SomeExamplesCover from "./slides/SomeExamples/SomeExamplesCover";
import Marketwatch from "./slides/SomeExamples/Marketwatch";
import Southwest from "./slides/SomeExamples/Southwest";
import Express from "./slides/SomeExamples/Express";
import Montana from "./slides/SomeExamples/Montana";
import Apple from "./slides/SomeExamples/Apple";
import Twitter from "./slides/SomeExamples/Twitter";

import ResourcesCover from "./slides/Resources/ResourcesCover";
import ChecklistP1 from "./slides/Resources/ChecklistP1";
import ChecklistP2 from "./slides/Resources/ChecklistP2";
import ChecklistP3 from "./slides/Resources/ChecklistP3";
import ChecklistP4 from "./slides/Resources/ChecklistP4";

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
        </Slide>
        {/* Accessibility */}
        <Slide bgColor="tertiary">
          <WebFundamentals />
        </Slide>
        <Slide>
          <SidewalkExample />
        </Slide>
        <Slide>
          <AccessibleParkingExample />
        </Slide>
        <Slide {...coverSlideProps}>
          <AccessibilityCover />
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
        {/* Colorblinded example */}
        <Slide>
          <Auditory />
        </Slide>
        <Slide>
          <Physical />
        </Slide>
        <Slide>
          <Mental />
        </Slide>
        {/* Dyslexia example */}
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
          {/* WEB ACCESSIBILITY POLICY AND LEGISLATION */}
          {/* EVALUATING WEB ACCESSIBILITY */}
          {/* AUDITING TOOLS */}
          {/* Adding accessibility to our process */}
        </Slide>
        <Slide>
          <CommonExamples />
        </Slide>
        <Slide>
          <W3CStandards />
        </Slide>
        <Slide>
          <W3CDesignStandards />
        </Slide>
        <Slide>
          <W3CAccessibilityStandards />
        </Slide>
        <Slide>
          <CompaniesSued />
        </Slide>
        <Slide bgColor="tertiary">
          <WCAGPrinciples />
        </Slide>
        <Slide bgColor="quartenary">
          <WCAGPrinciple1 />
        </Slide>
        <Slide>
          <WCAGGuideline11 />
        </Slide>
        <Slide>
          <WCAGGuideline12 />
        </Slide>
        <Slide>
          <WCAGGuideline13 />
        </Slide>
        <Slide>
          <WCAGGuideline14 />
        </Slide>
        <Slide bgColor="quartenary">
          <WCAGPrinciple2 />
        </Slide>
        <Slide>
          <WCAGGuideline21 />
        </Slide>
        <Slide>
          <WCAGGuideline22 />
        </Slide>
        <Slide>
          <WCAGGuideline23 />
        </Slide>
        <Slide>
          <WCAGGuideline24 />
        </Slide>
        <Slide bgColor="quartenary">
          <WCAGPrinciple3 />
        </Slide>
        <Slide>
          <WCAGGuideline31 />
        </Slide>
        <Slide>
          <WCAGGuideline32 />
        </Slide>
        <Slide>
          <WCAGGuideline33 />
        </Slide>
        <Slide bgColor="quartenary">
          <WCAGPrinciple4 />
        </Slide>
        <Slide>
          <WCAGGuideline41 />
        </Slide>
        <Slide>
          <WCAGConformanceLevels />
        </Slide>
        {/* SomeExamples */}
        <Slide {...coverSlideProps}>
          <SomeExamplesCover />
        </Slide>
        {/* Persian examples */}
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
        <Slide>
          <ChecklistP1 />
        </Slide>
        <Slide>
          <ChecklistP2 />
        </Slide>
        <Slide>
          <ChecklistP3 />
        </Slide>
        <Slide>
          <ChecklistP4 />
        </Slide>
        {/* Some resources */}
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
