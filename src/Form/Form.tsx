import React, { createContext } from "react";
import { bem } from "../utils/css";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { Spinner } from "../Spinner";

import "../styles/form.scss";

export type FormData = { [key: string]: any };
export type FormSubmitFn = (
  event: React.FormEvent<HTMLFormElement>,
  formData?: FormData
) => void;

export interface FormProps
  extends React.FormHTMLAttributes<HTMLFormElement>,
    RDPBaseProps<HTMLFormElement> {
  submitting?: boolean;
  autoControlled?: boolean;
  onSubmit: FormSubmitFn;
}

export const css = bem`rdp-form`;
export const FormContext = createContext({ autoControlled: false });

const autoSubmit = (
  onSubmit: FormSubmitFn,
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();
  const { elements } = event.currentTarget;
  const formData = {};
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.tagName === "BUTTON") continue;
    const { name, value } = element as HTMLInputElement;
    formData[name] = value;
  }
  onSubmit(event, formData);
};

export const Form: React.FC<FormProps> = ({
  submitting,
  autoControlled = false,
  onSubmit,
  children,
  ...baseProps
}) => (
  <FormContext.Provider value={{ autoControlled }}>
    <ComponentFactory
      onSubmit={autoControlled ? autoSubmit.bind(null, onSubmit) : onSubmit}
      fixedClassName={css}
      defaultTag="form"
      {...baseProps}
    >
      {submitting ? (
        <Spinner message="Submitting..." className={css.elem`spinner`.name} />
      ) : (
        children
      )}
    </ComponentFactory>
  </FormContext.Provider>
);
