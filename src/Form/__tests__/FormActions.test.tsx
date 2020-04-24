import React from "react";
import { cleanup, render } from "@testing-library/react";

import { FormActions } from "../";

describe("<FormActions />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(
      <FormActions>
        <p>{"Hello world"}</p>
      </FormActions>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <div
          class="rdp-form__actions "
        >
          <p>
            Hello world
          </p>
        </div>
      </div>
    `);
  });
});
