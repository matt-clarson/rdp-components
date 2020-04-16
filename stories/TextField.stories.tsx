import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "../src/Button";
import { Form, FormActions, FormContent, TextField } from "../src/Form";

export default { title: "TextField", component: TextField };

export const standard = () => (
  <>
    <TextField label="Standard Text Field" />
    <TextField label="With Specified Width" width={400} />
    <TextField label="Full Width" fullWidth />
  </>
);

export const multiline = () => (
  <>
    <TextField label="Standard Text Field" multiline />
    <TextField label="With Specified Width" width={400} multiline />
    <TextField label="Full Width" fullWidth multiline />
  </>
);

export const HTMLInputTypes = () => (
  <>
    <TextField label="Text Input" />
    <TextField label="Password Input" type="password" />
    <TextField label="Email Input" type="email" />
    <TextField label="Date Input" type="date" />
    <TextField label="Colour Input" type="color" />
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#%3Cinput%3E_types">
      {"And so on..."}
    </a>
  </>
);

export const validation = () => (
  <Form
    autoControlled
    onSubmit={event => {
      event.preventDefault();
      action("Submitted")(event);
    }}
  >
    <FormContent>
      <TextField label="Alphanumeric Only" pattern="[a-zA-Z\s]*" />
      <TextField label="Required" required />
      <TextField
        label="Minimum Length"
        title="Must be 10 characters or more"
        minLength={10}
      />
      <TextField
        label="Maximum Length"
        title="Must be 20 characters or less"
        maxLength={20}
      />
    </FormContent>
    <FormActions>
      <Button>{"Submit"}</Button>
    </FormActions>
  </Form>
);
