import React from "react";
import { array } from "@storybook/addon-knobs";
import {
  JoinedContent,
  JoinedContentBase,
  JoinedContentRaised,
  FloatContent
} from "../src/JoinedContent";

export default { title: "Joined Content", component: JoinedContent };

const defaultContentBase = [
  "This is a bunch of content for the base component",
  "Edit it in the Knobs panel below"
];

const defaultContentRaised = [
  "This is a bunch of content for the raised component",
  "Edit it in the Knobs panel below"
];

const toPTag = (s: string) => <p key={s}>{s}</p>;

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
    <JoinedContent floatContent={FloatContent.RIGHT}>
      <JoinedContentBase title="Joined Content">
        {baseContent.map(toPTag)}
      </JoinedContentBase>
      <JoinedContentRaised>{raisedContent.map(toPTag)}</JoinedContentRaised>
    </JoinedContent>
  );
};
