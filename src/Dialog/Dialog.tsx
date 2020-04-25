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
  /** Set the size of the dialog, using the `DialogSize` enum. Options are {SMALL, MEDIUM, LARGE, FULL_SCREEN} */
  size?: DialogSize;
  /** A callback that is called when the dialog closes. NOt this does not close the dialog itself. To do that, use the `open` prop */
  onClose: () => void;
  /** Sets whether the Dialog is open or closed */
  open?: boolean;
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
