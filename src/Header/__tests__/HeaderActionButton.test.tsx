import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";

import { HeaderActionButton } from "../";

describe("<HeaderActionButton />", () => {
  beforeEach(cleanup);

  describe('tag="button"', () => {
    it("should match initial snapshot", () => {
      const testDOM = render(
        <HeaderActionButton>{"Test HeaderActionButton"}</HeaderActionButton>
      );
      expect(testDOM.container).toMatchInlineSnapshot(`
        <div>
          <button
            class="rdp-header__action-button "
          >
            Test HeaderActionButton
          </button>
        </div>
      `);
    });

    it("should render icon if provided", () => {
      const testDOM = render(<HeaderActionButton icon="account_circle" />);
      expect(testDOM.container).toMatchInlineSnapshot(`
        <div>
          <button
            class="rdp-header__action-button "
          >
            <i
              class="material-icons "
              title="Account Circle"
            >
              account_circle
            </i>
          </button>
        </div>
      `);
    });

    it("should respond to click events", () => {
      const clickHandler = jest.fn();
      const testDOM = render(
        <HeaderActionButton onClick={clickHandler}>
          {"Test HeaderActionButton"}
        </HeaderActionButton>
      );
      fireEvent.click(testDOM.getByText("Test HeaderActionButton"));
      expect(clickHandler).toHaveBeenCalled();
    });

    it("should update css when disabled", () => {
      const testDOM = render(
        <HeaderActionButton disabled>
          {"Test HeaderActionButton"}
        </HeaderActionButton>
      );
      expect(testDOM.container).toMatchInlineSnapshot(`
        <div>
          <button
            class="rdp-header__action-button "
            disabled=""
          >
            Test HeaderActionButton
          </button>
        </div>
      `);
    });

    it("should not be clickable when disabled", () => {
      const clickHandler = jest.fn();
      const testDOM = render(
        <HeaderActionButton onClick={clickHandler} disabled>
          {"Test HeaderActionButton"}
        </HeaderActionButton>
      );
      fireEvent.click(testDOM.getByText("Test HeaderActionButton"));
      expect(clickHandler).not.toHaveBeenCalled();
    });
  });

  describe('tag="a"', () => {
    it("should match initial snapshot", () => {
      const testDOM = render(
        <HeaderActionButton tag="a" href="https://example.com">
          {"Test Anchor HeaderActionButton"}
        </HeaderActionButton>
      );
      expect(testDOM.container).toMatchInlineSnapshot(`
        <div>
          <a
            class="rdp-header__action-button "
            href="https://example.com"
          >
            Test Anchor HeaderActionButton
          </a>
        </div>
      `);
    });

    it("should remove href when disabled", () => {
      const testDOM = render(
        <HeaderActionButton tag="a" href="https://example.com" disabled>
          {"Test Anchor HeaderActionButton"}
        </HeaderActionButton>
      );
      const anchor = testDOM.getByText(
        "Test Anchor HeaderActionButton"
      ) as HTMLAnchorElement;
      expect(anchor.href).toBeFalsy();
    });
  });
});
