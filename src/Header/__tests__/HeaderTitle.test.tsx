import React from "react";
import { cleanup, render } from "@testing-library/react";

import { HeaderTitle } from "../";

describe("<HeaderTitle />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(<HeaderTitle>{"A Title"}</HeaderTitle>);
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <h1
          class="rdp-header__title"
        >
          <span
            class="rdp-header__title-content "
          >
            A Title
          </span>
        </h1>
      </div>
    `);
  });
});
