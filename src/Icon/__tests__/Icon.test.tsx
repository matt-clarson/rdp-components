import React from "react";
import { cleanup, render } from "@testing-library/react";

import { Icon } from "../";

describe("<Icon />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(<Icon icon="close" />);
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <i
          class="material-icons "
          title="Close"
        >
          close
        </i>
      </div>
    `);
  });

  it("should render title if provided", () => {
    const testDOM = render(<Icon icon="add" title="Test Title" />);
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <i
          class="material-icons "
          title="Test Title"
        >
          add
        </i>
      </div>
    `);
  });
});
