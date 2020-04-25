import React from "react";
import { addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import ThemeWrapper from "./decorators/ThemeWrapper";
import "../styles/rdp-styles.scss";

addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(ThemeWrapper);
