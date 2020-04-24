import React from "react";
import { cleanup, render } from "@testing-library/react";

import { HeaderActions } from "../";

describe("<HeaderActions />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(
      <HeaderActions>
        <button>{"Button"}</button>
      </HeaderActions>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <div
          class="rdp-header__actions "
        >
          <button>
            Button
          </button>
        </div>
      </div>
    `);
  });
});
