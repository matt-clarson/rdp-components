import React, { useContext } from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { Icon } from "../Icon";
import { DialogContext, css } from "./_private";

export interface DialogTitleProps extends RDPBaseProps<HTMLElement> {
  /** If true, the title will display an 'X' button to close the dialog */
  closeButton?: boolean;
}

export const DialogTitle: React.FC<DialogTitleProps> = ({
  children,
  closeButton,
  ...baseProps
}) => {
  const { onClose } = useContext(DialogContext);
  return (
    <ComponentFactory
      defaultTag="header"
      fixedClassName={css.elem`title`}
      {...baseProps}
    >
      <h3>{children}</h3>
      {closeButton && (
        <button className={css.elem`title-close-button`.name} onClick={onClose}>
          <Icon icon="close" />
        </button>
      )}
    </ComponentFactory>
  );
};
