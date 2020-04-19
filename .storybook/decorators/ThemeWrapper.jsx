import React from "react";
import { Theme } from "../../src/Theme";

export default Story => (
  <Theme
    colours={{
      primary: "#00ADB5",
      primaryGradient: "#00B590",
      secondary: "#F8B500",
      error: "red",
      textOnPrimary: "white",
      textOnSecondary: "white",
      textOnError: "white"
    }}
  >
    <Story />
  </Theme>
);
