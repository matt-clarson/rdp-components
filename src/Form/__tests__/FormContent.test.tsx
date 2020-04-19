import React from "react";
import { cleanup, render } from "@testing-library/react";

import { FormContent } from "../";

describe("<FormContent />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(
      <FormContent>
        <p>{"Hello world"}</p>
      </FormContent>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <div
          class="rdp-form__content "
        >
          <p>
            Hello world
          </p>
        </div>
      </div>
    `);
  });
});
