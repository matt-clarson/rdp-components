import { createContext } from "react";
import { bem } from "../utils/css";

export const css = bem`rdp-form`;
export const FormContext = createContext({ autoControlled: false });
