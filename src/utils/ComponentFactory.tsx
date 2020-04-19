import React from "react";
import { Bem, classes } from "./css";

export interface RDPBaseProps<T extends HTMLElement>
  extends React.HTMLAttributes<T> {
  tag?: React.ElementType;
}

type RDPButton = HTMLAnchorElement | HTMLButtonElement;

export interface RDPButtonProps
  extends React.AnchorHTMLAttributes<RDPButton>,
    Omit<React.ButtonHTMLAttributes<RDPButton>, "type">,
    RDPBaseProps<RDPButton> {}

export interface ComponentFactoryProps
  extends React.AllHTMLAttributes<HTMLElement>,
    RDPBaseProps<HTMLElement> {
  fixedClassName: Bem | string;
  className?: string;
  defaultTag: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

export const ComponentFactory: React.FC<ComponentFactoryProps> = ({
  fixedClassName,
  className,
  defaultTag,
  tag,
  children,
  ...props
}) => {
  const Tag: React.ElementType = tag ?? defaultTag;
  return (
    <Tag className={classes(fixedClassName, className ?? "")} {...props}>
      {children}
    </Tag>
  );
};
