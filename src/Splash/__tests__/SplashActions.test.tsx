import React from "react";
import { cleanup, render } from "@testing-library/react";

import { SplashActions, SplashPosition } from "../";

describe("<SplashActions />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(
      <SplashActions>
        <button>{"Button"}</button>
      </SplashActions>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <nav
          class="rdp-splash__actions rdp-splash__actions--left "
        >
          <button>
            Button
          </button>
        </nav>
      </div>
    `);
  });

  it("should match initial snapshot when centered", () => {
    const testDOM = render(
      <SplashActions position={SplashPosition.CENTRE}>
        <button>{"Button"}</button>
      </SplashActions>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <nav
          class="rdp-splash__actions rdp-splash__actions--centre "
        >
          <button>
            Button
          </button>
        </nav>
      </div>
    `);
  });

  it("should match initial snapshot when positioned right", () => {
    const testDOM = render(
      <SplashActions position={SplashPosition.RIGHT}>
        <button>{"Button"}</button>
      </SplashActions>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <nav
          class="rdp-splash__actions rdp-splash__actions--right "
        >
          <button>
            Button
          </button>
        </nav>
      </div>
    `);
  });
});
