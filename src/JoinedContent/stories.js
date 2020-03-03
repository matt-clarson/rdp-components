import React from "react";
import { array } from "@storybook/addon-knobs";
import JoinedContent from "./JoinedContent";
import JoinedContentBase from "./JoinedContentBase";
import JoinedContentRaised from "./JoinedContentRaised";

export default { title: "Joined Content", component: JoinedContent };

const defaultContentBase = [
  "This is a bunch of content for the base component",
  "Edit it in the Knobs panel below"
];

const defaultContentRaised = [
  "This is a bunch of content for the raised component",
  "Edit it in the Knobs panel below"
];

const toPTag = string => <p key={string}>{string}</p>;

export const floatLeft = () => {
  const baseContent = array("Base Content", defaultContentBase, "\n");
  const raisedContent = array("Raised Content", defaultContentRaised, "\n");
  return (
    <JoinedContent>
      <JoinedContentBase title="Joined Content">
        {baseContent.map(toPTag)}
      </JoinedContentBase>
      <JoinedContentRaised>{raisedContent.map(toPTag)}</JoinedContentRaised>
    </JoinedContent>
  );
};

export const floatRight = () => {
  const baseContent = array("Base Content", defaultContentBase, "\n");
  const raisedContent = array("Raised Content", defaultContentRaised, "\n");
  return (
    <JoinedContent floatContent="right">
      <JoinedContentBase title="Joined Content">
        {baseContent.map(toPTag)}
      </JoinedContentBase>
      <JoinedContentRaised>{raisedContent.map(toPTag)}</JoinedContentRaised>
    </JoinedContent>
  );
};
