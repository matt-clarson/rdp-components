import React from "react";
import { cleanup, render } from "@testing-library/react";

import { JoinedContentBase } from "../";

describe("<JoinedContentBase />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(
      <JoinedContentBase title="Test Title">
        <button>{"Button"}</button>
      </JoinedContentBase>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <div
          class="rdp-section--flat rdp-joined-content__base"
        >
          <h2
            class="rdp-joined-content__title"
          >
            Test Title
          </h2>
          <button>
            Button
          </button>
        </div>
      </div>
    `);
  });
});
