import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";

import { FormContext, TextField } from "../";

jest.mock("nanoid", () => jest.fn(() => "text-field-id"));

describe("<TextField />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(<TextField label="Test Text Field" />);
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <div
          class="rdp-text-field "
          style="width: 200px;"
        >
          <label
            class="rdp-text-field__label"
            for="text-field-id"
          >
            Test Text Field
          </label>
          <input
            class="rdp-text-field__input"
            id="text-field-id"
            title="Test Text Field "
            type="text"
            value=""
          />
        </div>
      </div>
    `);
  });

  it("should match initial snapshot as multiline", () => {
    const testDOM = render(<TextField label="Test Text Field" multiline />);
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <div
          class="rdp-text-field "
          style="width: 200px;"
        >
          <label
            class="rdp-text-field__label"
            for="text-field-id"
          >
            Test Text Field
          </label>
          <textarea
            class="rdp-text-field__input"
            id="text-field-id"
            title="Test Text Field "
            type="text"
          />
        </div>
      </div>
    `);
  });

  it("should respond to change events", () => {
    const changeHandler = jest.fn();
    const testDOM = render(
      <TextField label="Test Text Field" value="" onChange={changeHandler} />
    );
    fireEvent.change(testDOM.getByLabelText("Test Text Field"), {
      target: { value: "hello" }
    });
    expect(changeHandler).toHaveBeenCalled();
  });

  it("should respond to change events when auto-controlled", () => {
    const testDOM = render(
      <FormContext.Provider value={{ autoControlled: true }}>
        <TextField label="Test Text Field" />
      </FormContext.Provider>
    );
    fireEvent.change(testDOM.getByLabelText("Test Text Field"), {
      target: { value: "hello" }
    });
    expect(testDOM.getByLabelText("Test Text Field")).toHaveValue("hello");
  });

  it("should display maxLength when specified and focused", () => {
    const testDOM = render(
      <TextField
        label="Test Text Field"
        value="hello"
        onChange={jest.fn()}
        maxLength={10}
      />
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <div
          class="rdp-text-field "
          style="width: 200px;"
        >
          <label
            class="rdp-text-field__label"
            for="text-field-id"
          >
            Test Text Field
          </label>
          <input
            class="rdp-text-field__input"
            id="text-field-id"
            maxlength="10"
            title="Test Text Field "
            type="text"
            value="hello"
          />
          <span
            class="rdp-text-field__char-count"
          >
            5/10
          </span>
        </div>
      </div>
    `);
  });

  it.each`
    title             | label      | pattern      | expectedTitle
    ${"Custom Title"} | ${"Label"} | ${undefined} | ${"Custom Title"}
    ${"Custom Title"} | ${"Label"} | ${"pattern"} | ${"Custom Title"}
    ${undefined}      | ${"Label"} | ${"pattern"} | ${"Label pattern"}
    ${undefined}      | ${"Label"} | ${undefined} | ${"Label "}
    ${"Custom Title"} | ${"Label"} | ${"pattern"} | ${"Custom Title"}
  `(
    "should set title to $expectedTitle when title=$title; label=$label; pattern=$pattern",
    ({ title, label, pattern, expectedTitle }) => {
      const testDOM = render(<TextField {...{ title, label, pattern }} />);
      expect(testDOM.getByLabelText(label)).toHaveAttribute(
        "title",
        expectedTitle
      );
    }
  );
});
