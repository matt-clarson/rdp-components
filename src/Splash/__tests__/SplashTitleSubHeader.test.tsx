import React from "react";
import { cleanup, render } from "@testing-library/react";

import { SplashTitleSubHeader, SplashPosition } from "../";

describe("<Splash />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(
      <SplashTitleSubHeader>
        <button>{"Button"}</button>
      </SplashTitleSubHeader>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <p
          class="rdp-splash__title-sub-header rdp-splash__title-sub-header--left "
        >
          <button>
            Button
          </button>
        </p>
      </div>
    `);
  });

  it("should match initial snapshot when centered", () => {
    const testDOM = render(
      <SplashTitleSubHeader position={SplashPosition.CENTRE}>
        <button>{"Button"}</button>
      </SplashTitleSubHeader>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <p
          class="rdp-splash__title-sub-header rdp-splash__title-sub-header--centre "
        >
          <button>
            Button
          </button>
        </p>
      </div>
    `);
  });

  it("should match initial snapshot when positioned right", () => {
    const testDOM = render(
      <SplashTitleSubHeader position={SplashPosition.RIGHT}>
        <button>{"Button"}</button>
      </SplashTitleSubHeader>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <p
          class="rdp-splash__title-sub-header rdp-splash__title-sub-header--right "
        >
          <button>
            Button
          </button>
        </p>
      </div>
    `);
  });
});
