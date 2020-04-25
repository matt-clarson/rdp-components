import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import { DialogContext } from "../_private";

import { DialogTitle } from "../";

describe("<DialogTitle />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(<DialogTitle>{"title"}</DialogTitle>);
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <header
          class="rdp-dialog__title "
        >
          <h3>
            title
          </h3>
        </header>
      </div>
    `);
  });

  it("should match snapshot when closeButton is true", () => {
    const testDOM = render(<DialogTitle closeButton>{"title"}</DialogTitle>);
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <header
          class="rdp-dialog__title "
        >
          <h3>
            title
          </h3>
          <button
            class="rdp-dialog__title-close-button"
          >
            <i
              class="material-icons "
              title="Close"
            >
              close
            </i>
          </button>
        </header>
      </div>
    `);
  });

  it("should trigger dialog close", () => {
    const dialogContext = { onClose: jest.fn() };
    const testDOM = render(
      <DialogContext.Provider value={dialogContext}>
        <DialogTitle closeButton>{"title"}</DialogTitle>
      </DialogContext.Provider>
    );
    fireEvent.click(testDOM.getByText("close"));
    expect(dialogContext.onClose).toHaveBeenCalled();
  });
});
