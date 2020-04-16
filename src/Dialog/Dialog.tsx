import React, { createContext } from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { BemBlock as _BemBlock, bem } from "../utils/css";

import "../styles/dialog.scss";

export enum DialogSize {
  SMALL = "s",
  MEDIUM = "m",
  LARGE = "l",
  FULL_SCREEN = "fs"
}

export interface IDialogContext {
  onClose: () => void;
}

export interface DialogProps
  extends IDialogContext,
    React.DialogHTMLAttributes<HTMLElement>,
    RDPBaseProps<HTMLElement> {
  size?: DialogSize;
  onClose: () => void;
}

export const css = bem`rdp-dialog`;
export const DialogContext = createContext<IDialogContext>({
  onClose: () => {}
});

export const Dialog: React.FC<DialogProps> = ({
  size = DialogSize.MEDIUM,
  open,
  onClose,
  children,
  ...baseProps
}) => (
  <DialogContext.Provider value={{ onClose }}>
    {open && (
      <div className={css.elem`backdrop`.name} onClick={onClose}>
        <ComponentFactory
          defaultTag="dialog"
          fixedClassName={css.mod`${size}`}
          {...{
            ...baseProps,
            onClick: event => {
              event.stopPropagation();
              return baseProps.onClick?.(event);
            }
          }}
        >
          {children}
        </ComponentFactory>
      </div>
    )}
  </DialogContext.Provider>
);
