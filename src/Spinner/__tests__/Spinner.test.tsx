import React from "react";
import { cleanup, render } from "@testing-library/react";

import { Spinner } from "../";

describe("<Spinner />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(<Spinner />);
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <div
          class="rdp-spinner "
        >
          <i
            class="rdp-spinner__spinner--m"
          />
          <span
            class="rdp-spinner__message"
          >
            Loading...
          </span>
        </div>
      </div>
    `);
  });
});
