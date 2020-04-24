import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";

import { SplashActionButton } from "../";

describe("<SplashActionButton />", () => {
  beforeEach(cleanup);

  describe('tag="button"', () => {
    it("should match initial snapshot", () => {
      const testDOM = render(
        <SplashActionButton>{"Test SplashActionButton"}</SplashActionButton>
      );
      expect(testDOM.container).toMatchInlineSnapshot(`
        <div>
          <button
            class="rdp-splash__action-button "
          >
            Test SplashActionButton
          </button>
        </div>
      `);
    });

    it("should respond to click events", () => {
      const clickHandler = jest.fn();
      const testDOM = render(
        <SplashActionButton onClick={clickHandler}>
          {"Test SplashActionButton"}
        </SplashActionButton>
      );
      fireEvent.click(testDOM.getByText("Test SplashActionButton"));
      expect(clickHandler).toHaveBeenCalled();
    });

    it("should update css when disabled", () => {
      const testDOM = render(
        <SplashActionButton disabled>
          {"Test SplashActionButton"}
        </SplashActionButton>
      );
      expect(testDOM.container).toMatchInlineSnapshot(`
        <div>
          <button
            class="rdp-splash__action-button "
            disabled=""
          >
            Test SplashActionButton
          </button>
        </div>
      `);
    });

    it("should not be clickable when disabled", () => {
      const clickHandler = jest.fn();
      const testDOM = render(
        <SplashActionButton onClick={clickHandler} disabled>
          {"Test SplashActionButton"}
        </SplashActionButton>
      );
      fireEvent.click(testDOM.getByText("Test SplashActionButton"));
      expect(clickHandler).not.toHaveBeenCalled();
    });
  });

  describe('tag="a"', () => {
    it("should match initial snapshot", () => {
      const testDOM = render(
        <SplashActionButton tag="a" href="https://example.com">
          {"Test Anchor SplashActionButton"}
        </SplashActionButton>
      );
      expect(testDOM.container).toMatchInlineSnapshot(`
        <div>
          <a
            class="rdp-splash__action-button "
            href="https://example.com"
          >
            Test Anchor SplashActionButton
          </a>
        </div>
      `);
    });

    it("should remove href when disabled", () => {
      const testDOM = render(
        <SplashActionButton tag="a" href="https://example.com" disabled>
          {"Test Anchor SplashActionButton"}
        </SplashActionButton>
      );
      const anchor = testDOM.getByText(
        "Test Anchor SplashActionButton"
      ) as HTMLAnchorElement;
      expect(anchor.href).toBeFalsy();
    });
  });
});
