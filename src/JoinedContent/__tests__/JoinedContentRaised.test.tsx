import React from "react";
import { cleanup, render } from "@testing-library/react";

import { JoinedContentRaised } from "../";

describe("<JoinedContentRaised />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(
      <JoinedContentRaised>
        <button>{"Button"}</button>
      </JoinedContentRaised>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <div
          class="rdp-joined-content__raised-wrapper"
        >
          <section
            class="rdp-joined-content__raised "
          >
            <button>
              Button
            </button>
          </section>
        </div>
      </div>
    `);
  });
});
