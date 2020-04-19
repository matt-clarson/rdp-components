import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";

import { FloatingActionButton } from "../";

describe("<FloatingActionButton />", () => {
  beforeEach(cleanup);

  describe('tag="button"', () => {
    it("should match initial snapshot", () => {
      const testDOM = render(<FloatingActionButton icon="add" />);
      expect(testDOM.container).toMatchInlineSnapshot(`
        <div>
          <button
            class="rdp-floating-action-button "
          >
            <i
              class="material-icons "
              title="Add"
            >
              add
            </i>
          </button>
        </div>
      `);
    });

    it("should respond to click events", () => {
      const clickHandler = jest.fn();
      const testDOM = render(
        <FloatingActionButton
          data-testid="fab"
          onClick={clickHandler}
          icon="add"
        />
      );
      fireEvent.click(testDOM.getByTestId("fab"));
      expect(clickHandler).toHaveBeenCalled();
    });

    it("should update css when disabled", () => {
      const testDOM = render(<FloatingActionButton disabled icon="add" />);
      expect(testDOM.container).toMatchInlineSnapshot(`
        <div>
          <button
            class="rdp-floating-action-button--disabled "
            disabled=""
          >
            <i
              class="material-icons "
              title="Add"
            >
              add
            </i>
          </button>
        </div>
      `);
    });

    it("should not be clickable when disabled", () => {
      const clickHandler = jest.fn();
      const testDOM = render(
        <FloatingActionButton
          data-testid="fab"
          onClick={clickHandler}
          disabled
          icon="add"
        />
      );
      fireEvent.click(testDOM.getByTestId("fab"));
      expect(clickHandler).not.toHaveBeenCalled();
    });
  });

  describe('tag="a"', () => {
    it("should match initial snapshot", () => {
      const testDOM = render(
        <FloatingActionButton tag="a" href="https://example.com" icon="add" />
      );
      expect(testDOM.container).toMatchInlineSnapshot(`
        <div>
          <a
            class="rdp-floating-action-button "
            href="https://example.com"
          >
            <i
              class="material-icons "
              title="Add"
            >
              add
            </i>
          </a>
        </div>
      `);
    });

    it("should remove href when disabled", () => {
      const testDOM = render(
        <FloatingActionButton
          data-testid="fab"
          tag="a"
          href="https://example.com"
          disabled
          icon="add"
        />
      );
      const anchor = testDOM.getByTestId("fab") as HTMLAnchorElement;
      expect(anchor.href).toBeFalsy();
    });
  });
});
