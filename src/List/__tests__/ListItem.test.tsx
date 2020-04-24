import React from "react";
import { cleanup, render } from "@testing-library/react";

import { ListItem } from "../";

describe("<ListItem />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(<ListItem>{"item"}</ListItem>);
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <li
          class="rdp-list__item "
        >
          item
        </li>
      </div>
    `);
  });
});
