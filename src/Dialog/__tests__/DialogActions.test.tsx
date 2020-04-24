import React from "react";
import { cleanup, render } from "@testing-library/react";

import { DialogActions } from "../";

describe("<DialogActions />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(
      <DialogActions>
        <button>{"Button"}</button>
      </DialogActions>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <div
          class="rdp-dialog__actions "
        >
          <button>
            Button
          </button>
        </div>
      </div>
    `);
  });
});
