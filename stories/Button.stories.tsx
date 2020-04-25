import React from "react";
import { action } from "@storybook/addon-actions";
import { Button, FloatingActionButton } from "../src/Button";

export default {
  title: "Buttons",
  decorators: [
    (storyFn: () => any) => (
      <div
        style={{
          padding: "0 30%",
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        {storyFn()}
      </div>
    )
  ]
};

export const button = () => (
  <>
    <Button onClick={action("clicked primary button")}>{"Primary"}</Button>
    <Button onClick={action("clicked danger button")} danger>
      {"Danger"}
    </Button>
    <Button onClick={action("clicked transparent button")} transparent>
      {"Transparent"}
    </Button>
    <Button onClick={action("clicked disabled button")} disabled>
      {"Disabled"}
    </Button>
  </>
);

export const floatingActionButton = () => (
  <>
    <div>
      {"Secondary"}
      <FloatingActionButton
        onClick={action("clicked floating action button")}
        icon="add"
      />
    </div>
    <div>
      {"Disabled"}
      <FloatingActionButton
        onClick={action("clicked disabled FAB")}
        icon="add"
        disabled
      />
    </div>
  </>
);
