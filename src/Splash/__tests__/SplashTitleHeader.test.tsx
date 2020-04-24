import React from "react";
import { cleanup, render } from "@testing-library/react";

import { SplashTitleHeader } from "../";

describe("<SplashTitleHeader />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(
      <SplashTitleHeader>{"Test Text"}</SplashTitleHeader>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <h1
          class="rdp-splash__title-header "
        >
          Test Text
        </h1>
      </div>
    `);
  });
});
