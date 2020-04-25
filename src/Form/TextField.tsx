import React, { useContext, useRef, useState } from "react";
import nanoid from "nanoid";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { bem } from "../utils/css";
import { FormContext } from "./_private";

export interface TextFieldProps extends RDPBaseProps<HTMLElement> {
  /** The width of the TextField in pixels. If `fullWidth` is set, this value is ignored.*/
  width?: number;
  /** If set, the TextField will have a width set to 100% */
  fullWidth?: boolean;
  /** The label used to identify the TextField */
  label: React.ReactNode;
  /** If true, the TextField will render as a `textarea`. Its height will be adjustable, its width will still be goverened by teh `width` and `fullWidth` props */
  multiline?: boolean;
  /** The value of the TextField, if it is being controlled. Note this prop is ignored if the TextField is rendered inside an auto controlled `Form` */
  value?: string;
  /** The identifying name of the TextField, this vprop is only used if the TextField is inside an auto controlled `Form` */
  name?: string;
  /** The type of the TextField - all HTML5 input types are supported */
  type?: string;
  /** If set to true, the TextField ill use the HTML5 validation API to set itself as required in its form */
  required?: boolean;
  /** If provided, the TextField will use the HTML5 validation API to validate its value. Pattern should be provided as a regex string (without the wrapping '/' characters) */
  pattern?: string;
  /** If provided, the TextField will use the HTML5 validation API to validate that it's value length is greater than or equal to the provided minimum length */
  minLength?: number;
  /** If provided, the TextField will use the HTML5 validation API to validate that it's value length is less than or equal to the provided maximum length */
  maxLength?: number;
  /** Called when the underlying input or textarea receives a Change event - note that this prop is ignored if the TextField is inside an auto controlled `Form` */
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

type InputRef = React.RefObject<HTMLInputElement> &
  React.RefObject<HTMLTextAreaElement>;

const useAutoControlledInput = () => {
  const inputRef: InputRef = useRef(null);
  const [value, setValue] = useState("");
  const onChange = () => {
    setValue(inputRef.current?.value ?? "");
  };
  return { inputRef, value, onChange };
};

export const TextField: React.FC<TextFieldProps> = ({
  width = 200,
  fullWidth,
  name,
  label,
  value,
  onChange,
  type = "text",
  required,
  title,
  pattern,
  minLength,
  maxLength,
  multiline,
  ...baseProps
}) => {
  const css = bem`rdp-text-field`;
  const { autoControlled } = useContext(FormContext);
  const { inputRef, ...auto } = useAutoControlledInput();
  const Input = multiline ? "textarea" : "input";
  const id = useRef<string | null>(null);
  id.current = id.current ?? nanoid();
  return (
    <ComponentFactory
      style={{ width: fullWidth ? "100%" : width }}
      fixedClassName={css}
      defaultTag="div"
      {...baseProps}
    >
      <label htmlFor={id.current} className={css.elem`label`.name}>
        {label}
      </label>
      <Input
        className={css.elem`input`.name}
        id={id.current}
        ref={inputRef}
        {...{
          name,
          type,
          pattern,
          minLength,
          maxLength,
          value,
          onChange: autoControlled ? auto.onChange : onChange,
          required,
          title: title ?? `${label} ${pattern ?? ""}`
        }}
      />
      {maxLength && (
        <span className={css.elem`char-count`.name}>{`${value?.length ??
          auto.value.length}/${maxLength}`}</span>
      )}
    </ComponentFactory>
  );
};
