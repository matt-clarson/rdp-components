import React from "react";
import { cleanup, render } from "@testing-library/react";

import { FloatContent, JoinedContent } from "../";

describe("<JoinedContent />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(
      <JoinedContent>
        <button>{"Button"}</button>
      </JoinedContent>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <section
          class="rdp-joined-content--left "
        >
          <button>
            Button
          </button>
        </section>
      </div>
    `);
  });

  it("should match initial snapshot when floated right", () => {
    const testDOM = render(
      <JoinedContent floatContent={FloatContent.RIGHT}>
        <button>{"Button"}</button>
      </JoinedContent>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <section
          class="rdp-joined-content--right "
        >
          <button>
            Button
          </button>
        </section>
      </div>
    `);
  });
});
