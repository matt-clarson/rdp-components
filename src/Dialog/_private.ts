import { createContext } from "react";
import { bem } from "../utils/css";

export interface IDialogContext {
  onClose: () => void;
}

export const css = bem`rdp-dialog`;
export const DialogContext = createContext<IDialogContext>({
  onClose: () => {}
});
