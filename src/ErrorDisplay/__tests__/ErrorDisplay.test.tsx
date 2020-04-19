import React from "react";
import { cleanup, render } from "@testing-library/react";

import { ErrorDisplay } from "../";

describe("<ErrorDisplay />", () => {
  beforeEach(cleanup);

  it("should render node as error", () => {
    const testDOM = render(
      <ErrorDisplay error={<p>{"Something has gone wrong"}</p>} />
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <div
          class="rdp-error "
        >
          <span
            class="rdp-error__message"
          >
            <span
              class="rdp-error__message-lead"
            >
              <i
                class="material-icons rdp-error__message-icon"
                title="Error"
              >
                error
              </i>
              Error
            </span>
            <br />
            <p>
              Something has gone wrong
            </p>
          </span>
        </div>
      </div>
    `);
  });

  it("should render error object as error", () => {
    const error = new Error("Something has gone wrong");
    const testDOM = render(<ErrorDisplay error={error} />);
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <div
          class="rdp-error "
        >
          <span
            class="rdp-error__message"
          >
            <span
              class="rdp-error__message-lead"
            >
              <i
                class="material-icons rdp-error__message-icon"
                title="Error"
              >
                error
              </i>
              Error
            </span>
            <br />
            <p
              class="rdp-error__error-text"
            >
              Something has gone wrong
            </p>
          </span>
        </div>
      </div>
    `);
  });

  it("should render string as error", () => {
    const error = "Something has gone wrong";
    const testDOM = render(<ErrorDisplay error={error} />);
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <div
          class="rdp-error "
        >
          <span
            class="rdp-error__message"
          >
            <span
              class="rdp-error__message-lead"
            >
              <i
                class="material-icons rdp-error__message-icon"
                title="Error"
              >
                error
              </i>
              Error
            </span>
            <br />
            <p
              class="rdp-error__error-text"
            >
              Something has gone wrong
            </p>
          </span>
        </div>
      </div>
    `);
  });

  it("should render array as error", () => {
    const error = [
      "Something has gone wrong",
      "Another thing has also gone wrong"
    ];
    const testDOM = render(<ErrorDisplay error={error} />);
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <div
          class="rdp-error "
        >
          <span
            class="rdp-error__message"
          >
            <span
              class="rdp-error__message-lead"
            >
              <i
                class="material-icons rdp-error__message-icon"
                title="Error"
              >
                error
              </i>
              Error
            </span>
            <br />
            <p
              class="rdp-error__error-text"
            >
              Something has gone wrong
            </p>
            <p
              class="rdp-error__error-text"
            >
              Another thing has also gone wrong
            </p>
          </span>
        </div>
      </div>
    `);
  });
});
