import React from "react";
import { cleanup, render } from "@testing-library/react";

import { SplashTitle } from "../";

describe("<SplashTitle />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(<SplashTitle>{"Test Text"}</SplashTitle>);
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <header
          class="rdp-splash__title "
        >
          Test Text
        </header>
      </div>
    `);
  });
});
