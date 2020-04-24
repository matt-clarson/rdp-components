import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";

import { Dialog } from "../";

describe("<Dialog />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(
      <Dialog open onClose={jest.fn()}>
        <p>{"Some child"}</p>
      </Dialog>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <div
          class="rdp-dialog__backdrop"
        >
          <dialog
            class="rdp-dialog--m "
          >
            <p>
              Some child
            </p>
          </dialog>
        </div>
      </div>
    `);
  });

  it("should not render when closed", () => {
    const testDOM = render(
      <Dialog onClose={jest.fn()}>
        <p>{"Some child"}</p>
      </Dialog>
    );
    expect(testDOM.container).not.toHaveTextContent("Some child");
  });

  it("should respond to click events normally", () => {
    const closeHandler = jest.fn();
    const clickHandler = jest.fn();
    const testDOM = render(
      <Dialog
        data-testid="dialog"
        open
        onClose={closeHandler}
        onClick={clickHandler}
      >
        <button onClick={clickHandler}>{"Button"}</button>
      </Dialog>
    );
    fireEvent.click(testDOM.getByText("Button"));
    expect(clickHandler).toHaveBeenCalledTimes(2);
    expect(closeHandler).not.toHaveBeenCalled();
    fireEvent.click(testDOM.getByTestId("dialog"));
    expect(clickHandler).toHaveBeenCalledTimes(3);
    expect(closeHandler).not.toHaveBeenCalled();
  });

  it("should close when backdrop is clicked", () => {
    const closeHandler = jest.fn();
    const testDOM = render(
      <Dialog data-testid="dialog" open onClose={closeHandler}>
        {"Dialog"}
      </Dialog>
    );
    const backdrop = testDOM.getByTestId("dialog").parentNode as Node;
    fireEvent.click(backdrop);
    expect(closeHandler).toHaveBeenCalled();
  });
});
