import React from "react";
import { cleanup, render } from "@testing-library/react";

import { DialogContent } from "../";

describe("<DialogContent />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(
      <DialogContent>
        <p>{"some content"}</p>
      </DialogContent>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <div
          class="rdp-dialog__content "
        >
          <p>
            some content
          </p>
        </div>
      </div>
    `);
  });
});
