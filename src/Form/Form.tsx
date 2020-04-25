import React, { createContext } from "react";
import { bem } from "../utils/css";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { Spinner } from "../Spinner";

export type FormData = { [key: string]: any };
export type FormSubmitFn = (
  event: React.FormEvent<HTMLFormElement>,
  formData?: FormData
) => void;

export interface FormProps
  extends React.FormHTMLAttributes<HTMLFormElement>,
    RDPBaseProps<HTMLFormElement> {
  /** If true, the form will be replaced with a loading <Spinner /> */
  submitting?: boolean;
  /** If true, the form will be in auto controlled mode. Any inputs in the form will be automatically read when the Submit event fires, using the `name` attributes on the inputs to build up an object (`FormData`) that will be passed as a second argument to the `onSubmit` callback */
  autoControlled?: boolean;
  /** Called when the form submits - if the form is in autocontrolled mode, a second argument will be passed containing the auto generated contents of the form */
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
