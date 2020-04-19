import React from "react";
import { cleanup, render } from "@testing-library/react";

import { SectionGroup } from "../";

describe("<SectionGroup />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(
      <SectionGroup>
        <button>{"Button"}</button>
      </SectionGroup>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <div
          class="rdp-section-group "
        >
          <button>
            Button
          </button>
        </div>
      </div>
    `);
  });
});
