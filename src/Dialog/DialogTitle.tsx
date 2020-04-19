import React, { useContext } from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { DialogContext, css } from "./Dialog";
import Icon from "../Icon";

export interface DialogTitleProps extends RDPBaseProps<HTMLElement> {
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
