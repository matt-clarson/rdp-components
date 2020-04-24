import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";

import { ListItemActionButton } from "../";

describe("<ListItemActionButton />", () => {
  beforeEach(cleanup);

  describe('tag="button"', () => {
    it("should match initial snapshot", () => {
      const testDOM = render(
        <ListItemActionButton>
          {"Test ListItemActionButton"}
        </ListItemActionButton>
      );
      expect(testDOM.container).toMatchInlineSnapshot(`
        <div>
          <button
            class="rdp-list__item-action-button "
          >
            Test ListItemActionButton
          </button>
        </div>
      `);
    });

    it("should render icon if provided", () => {
      const testDOM = render(<ListItemActionButton icon="account_circle" />);
      expect(testDOM.container).toMatchInlineSnapshot(`
        <div>
          <button
            class="rdp-list__item-action-button "
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
        <ListItemActionButton onClick={clickHandler}>
          {"Test ListItemActionButton"}
        </ListItemActionButton>
      );
      fireEvent.click(testDOM.getByText("Test ListItemActionButton"));
      expect(clickHandler).toHaveBeenCalled();
    });

    it("should update css when disabled", () => {
      const testDOM = render(
        <ListItemActionButton disabled>
          {"Test ListItemActionButton"}
        </ListItemActionButton>
      );
      expect(testDOM.container).toMatchInlineSnapshot(`
        <div>
          <button
            class="rdp-list__item-action-button "
            disabled=""
          >
            Test ListItemActionButton
          </button>
        </div>
      `);
    });

    it("should not be clickable when disabled", () => {
      const clickHandler = jest.fn();
      const testDOM = render(
        <ListItemActionButton onClick={clickHandler} disabled>
          {"Test ListItemActionButton"}
        </ListItemActionButton>
      );
      fireEvent.click(testDOM.getByText("Test ListItemActionButton"));
      expect(clickHandler).not.toHaveBeenCalled();
    });
  });

  describe('tag="a"', () => {
    it("should match initial snapshot", () => {
      const testDOM = render(
        <ListItemActionButton tag="a" href="https://example.com">
          {"Test Anchor ListItemActionButton"}
        </ListItemActionButton>
      );
      expect(testDOM.container).toMatchInlineSnapshot(`
        <div>
          <a
            class="rdp-list__item-action-button "
            href="https://example.com"
          >
            Test Anchor ListItemActionButton
          </a>
        </div>
      `);
    });

    it("should remove href when disabled", () => {
      const testDOM = render(
        <ListItemActionButton tag="a" href="https://example.com" disabled>
          {"Test Anchor ListItemActionButton"}
        </ListItemActionButton>
      );
      const anchor = testDOM.getByText(
        "Test Anchor ListItemActionButton"
      ) as HTMLAnchorElement;
      expect(anchor.href).toBeFalsy();
    });
  });
});
