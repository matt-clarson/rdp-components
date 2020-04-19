import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";

import { Form } from "../";

describe("<Form />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(
      <Form onSubmit={jest.fn()}>
        <button>{"Submit"}</button>
      </Form>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <form
          class="rdp-form "
        >
          <button>
            Submit
          </button>
        </form>
      </div>
    `);
  });

  it("should match initial snapshot when submitting", () => {
    const testDOM = render(
      <Form onSubmit={jest.fn()} submitting>
        <button>{"Submit"}</button>
      </Form>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <form
          class="rdp-form "
        >
          <div
            class="rdp-spinner rdp-form__spinner"
          >
            <i
              class="rdp-spinner__spinner--m"
            />
            <span
              class="rdp-spinner__message"
            >
              Submitting...
            </span>
          </div>
        </form>
      </div>
    `);
  });

  it("should trigger onSubmit callback", () => {
    const submitHandler = jest.fn();
    const testDOM = render(
      <Form onSubmit={submitHandler} data-testid="form"></Form>
    );
    fireEvent.submit(testDOM.getByTestId("form"));
    expect(submitHandler).toHaveBeenCalled();
  });

  it("should read inputs when submitting as autoControlled", () => {
    const submitHandler = jest.fn();
    const testDOM = render(
      <Form data-testid="form" onSubmit={submitHandler} autoControlled>
        <input name="field-1" defaultValue="hello" />
        <input name="field-2" defaultValue="world" />
        <button>{"Submit"}</button>
      </Form>
    );
    fireEvent.submit(testDOM.getByTestId("form"));
    expect(submitHandler).toHaveBeenCalled();
    expect(submitHandler.mock.calls[0][0].constructor.name).toBe(
      "SyntheticEvent"
    );
    expect(submitHandler.mock.calls[0][1]).toStrictEqual({
      "field-1": "hello",
      "field-2": "world"
    });
  });
});
