import React from "react";
import { cleanup, render } from "@testing-library/react";

import { Splash, SplashPosition } from "../";

describe("<Splash />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(
      <Splash>
        <button>{"Button"}</button>
      </Splash>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <dialog
          class="rdp-splash rdp-splash--left "
          open=""
        >
          <button>
            Button
          </button>
        </dialog>
      </div>
    `);
  });

  it("should match initial snapshot when centered", () => {
    const testDOM = render(
      <Splash position={SplashPosition.CENTRE}>
        <button>{"Button"}</button>
      </Splash>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <dialog
          class="rdp-splash rdp-splash--centre "
          open=""
        >
          <button>
            Button
          </button>
        </dialog>
      </div>
    `);
  });

  it("should match initial snapshot when positioned right", () => {
    const testDOM = render(
      <Splash position={SplashPosition.RIGHT}>
        <button>{"Button"}</button>
      </Splash>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <dialog
          class="rdp-splash rdp-splash--right "
          open=""
        >
          <button>
            Button
          </button>
        </dialog>
      </div>
    `);
  });
});
