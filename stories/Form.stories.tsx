import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { Button } from "../src/Button";
import { Form, FormActions, FormContent, TextField } from "../src/Form";

export default {
  title: "Form",
  component: Form
};

const formSubmitted = action("Form Submitted");

export const controlledForm = () => {
  const formSubmitting = boolean("Form Submitting", false);
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formSubmitted({ firstname, lastname });
  };
  const [firstname, setFirstame] = useState("");
  const [lastname, setLastname] = useState("");

  return (
    <Form onSubmit={submitForm} submitting={formSubmitting}>
      <FormContent>
        <TextField
          label="First Name"
          value={firstname}
          onChange={({ target: { value } }) => setFirstame(value)}
          required
        />
        <TextField
          label="Last Name"
          value={lastname}
          onChange={({ target: { value } }) => setLastname(value)}
          required
        />
      </FormContent>
      <FormActions>
        <Button>{"Submit"}</Button>
      </FormActions>
    </Form>
  );
};

export const uncontrolledForm = () => (
  <Form autoControlled onSubmit={formSubmitted}>
    <FormContent>
      <TextField name="firstname" label="First Name" required />
      <TextField name="lastname" label="Last Name" required />
    </FormContent>
    <FormActions>
      <Button>{"Submit"}</Button>
    </FormActions>
  </Form>
);
