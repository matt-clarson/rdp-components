import React from "react";
import { cleanup, render } from "@testing-library/react";

import { List } from "../";

describe("<List />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(
      <List>
        <li>{"item"}</li>
      </List>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <ul
          class="rdp-list "
        >
          <li>
            item
          </li>
        </ul>
      </div>
    `);
  });
});
