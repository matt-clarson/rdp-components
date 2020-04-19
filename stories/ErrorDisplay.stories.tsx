import React from "react";
import { array, text } from "@storybook/addon-knobs";
import { ErrorDisplay } from "../src/ErrorDisplay";

export default {
  title: "Error Display",
  parameters: { info: { inline: true } },
  component: ErrorDisplay
};

export const defaultErrorDisplay = () => (
  <ErrorDisplay error="Something has gone wrong" />
);

export const noError = () => (
  <>
    <p>
      {
        "When no error is defined, ErrorDisplay unmounts itself (check in the console to see for yourself)"
      }
    </p>
    <ErrorDisplay error={text("Error Text", "")} />
  </>
);

const defaultErrorArray = ["Error 1", "Error 2"];

export const errorObjectError = () => (
  <>
    <p>{"You can also provide an actual Error object to the component"}</p>
    <ErrorDisplay error={new Error("Something went wrong")} />
  </>
);

export const arrayError = () => (
  <ErrorDisplay error={array("Errors", defaultErrorArray)} />
);

export const customComponentError = () => (
  <ErrorDisplay
    error={
      <>
        <h2>{"Error Title"}</h2>
        <p>{"Error description"}</p>
        <ol>
          <li>{"Error detail"}</li>
          <li>{"Another error detail"}</li>
        </ol>
      </>
    }
  />
);
