import React, { useContext, useRef, useState } from "react";
import nanoid from "nanoid";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { bem } from "../utils/css";
import { FormContext } from "./Form";

import "../styles/text-field.scss";

export interface TextFieldProps extends RDPBaseProps<HTMLElement> {
  width?: number;
  fullWidth?: boolean;
  label: React.ReactNode;
  multiline?: boolean;
  value?: string;
  name?: string;
  type?: string;
  required?: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
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
