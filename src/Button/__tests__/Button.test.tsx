import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";

import { Button } from "../";

describe("<Button />", () => {
  beforeEach(cleanup);

  describe('tag="button"', () => {
    it("should match initial snapshot", () => {
      const testDOM = render(<Button>{"Test Button"}</Button>);
      expect(testDOM.container).toMatchInlineSnapshot(`
              <div>
                <button
                  class="rdp-button "
                >
                  Test Button
                </button>
              </div>
          `);
    });

    it("should respond to click events", () => {
      const clickHandler = jest.fn();
      const testDOM = render(
        <Button onClick={clickHandler}>{"Test Button"}</Button>
      );
      fireEvent.click(testDOM.getByText("Test Button"));
      expect(clickHandler).toHaveBeenCalled();
    });

    it("should update css when disabled", () => {
      const testDOM = render(<Button disabled>{"Test Button"}</Button>);
      expect(testDOM.container).toMatchInlineSnapshot(`
        <div>
          <button
            class="rdp-button--disabled "
            disabled=""
          >
            Test Button
          </button>
        </div>
      `);
    });

    it("should update css when transparent", () => {
      const testDOM = render(<Button transparent>{"Test Button"}</Button>);
      expect(testDOM.container).toMatchInlineSnapshot(`
        <div>
          <button
            class="rdp-transparent-button "
          >
            Test Button
          </button>
        </div>
      `);
    });

    it("should update css when danger", () => {
      const testDOM = render(<Button danger>{"Test Button"}</Button>);
      expect(testDOM.container).toMatchInlineSnapshot(`
        <div>
          <button
            class="rdp-button--danger "
          >
            Test Button
          </button>
        </div>
      `);
    });

    it("should not be clickable when disabled", () => {
      const clickHandler = jest.fn();
      const testDOM = render(
        <Button onClick={clickHandler} disabled>
          {"Test Button"}
        </Button>
      );
      fireEvent.click(testDOM.getByText("Test Button"));
      expect(clickHandler).not.toHaveBeenCalled();
    });
  });

  describe('tag="a"', () => {
    it("should match initial snapshot", () => {
      const testDOM = render(
        <Button tag="a" href="https://example.com">
          {"Test Anchor Button"}
        </Button>
      );
      expect(testDOM.container).toMatchInlineSnapshot(`
              <div>
                <a
                  class="rdp-button "
                  href="https://example.com"
                >
                  Test Anchor Button
                </a>
              </div>
          `);
    });

    it("should remove href when disabled", () => {
      const testDOM = render(
        <Button tag="a" href="https://example.com" disabled>
          {"Test Anchor Button"}
        </Button>
      );
      const anchor = testDOM.getByText(
        "Test Anchor Button"
      ) as HTMLAnchorElement;
      expect(anchor.href).toBeFalsy();
    });
  });
});
