import React from "react";
import { cleanup, render } from "@testing-library/react";

import { Header } from "../";

describe("<Header />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(
      <Header>
        <button>{"Button"}</button>
      </Header>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <header
          class="rdp-header "
        >
          <button>
            Button
          </button>
        </header>
      </div>
    `);
  });
});
