import React from "react";
import { cleanup, render } from "@testing-library/react";

import { ListItemText } from "../";

describe("<ListItemText />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(<ListItemText>{"Text"}</ListItemText>);
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <span
          class="rdp-list__item-text "
        >
          Text
        </span>
      </div>
    `);
  });

  it("should match initial snapshot when secondary", () => {
    const testDOM = render(<ListItemText secondary>{"Text"}</ListItemText>);
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <span
          class="rdp-list__item-text--secondary "
        >
          Text
        </span>
      </div>
    `);
  });
});
