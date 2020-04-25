import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import nanoid from "nanoid";
import { SectionGroupContext } from "../_private";

import { Section } from "../";

jest.mock("nanoid");

describe("<Section />", () => {
  beforeEach(cleanup);

  it("should match initial snapshot", () => {
    const testDOM = render(
      <Section>
        <button>{"Button"}</button>
      </Section>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <section
          class="rdp-section--raised "
        >
          <button>
            Button
          </button>
        </section>
      </div>
    `);
  });

  it("should match initial snapshot when flat", () => {
    const testDOM = render(
      <Section flat>
        <button>{"Button"}</button>
      </Section>
    );
    expect(testDOM.container).toMatchInlineSnapshot(`
      <div>
        <section
          class="rdp-section--flat "
        >
          <button>
            Button
          </button>
        </section>
      </div>
    `);
  });

  describe("when in section group", () => {
    const sectionGroupContext = {
      active: null,
      setActive: jest.fn()
    };

    const mockedNanoid = mocked(nanoid, true);

    beforeEach(() => {
      jest.resetAllMocks();
      sectionGroupContext.active = null;
      mockedNanoid.mockImplementation(() => "test-section");
    });

    it("should set active section to context active", () => {
      Object.assign(sectionGroupContext, { active: "test-section" });
      const testDOM = render(
        <SectionGroupContext.Provider value={sectionGroupContext}>
          <Section data-testid="section">{"Text"}</Section>
        </SectionGroupContext.Provider>
      );
      expect(testDOM.getByTestId("section").className).toContain("raised");
    });

    it("should set inactive section to context active", () => {
      const testDOM = render(
        <SectionGroupContext.Provider value={sectionGroupContext}>
          <Section data-testid="section">{"Text"}</Section>
        </SectionGroupContext.Provider>
      );
      expect(testDOM.getByTestId("section").className).toContain("flat");
    });

    it("should set active section on mouse enter", () => {
      const mouseEnterHandler = jest.fn();
      const testDOM = render(
        <SectionGroupContext.Provider value={sectionGroupContext}>
          <Section onMouseEnter={mouseEnterHandler} data-testid="section">
            {"Text"}
          </Section>
        </SectionGroupContext.Provider>
      );
      fireEvent.mouseEnter(testDOM.getByTestId("section"));
      expect(sectionGroupContext.setActive).toHaveBeenCalledWith(
        "test-section"
      );
      expect(mouseEnterHandler).toHaveBeenCalled();
    });

    it("should clear active section on mouse leave", () => {
      const mouseLeaveHandler = jest.fn();
      const testDOM = render(
        <SectionGroupContext.Provider value={sectionGroupContext}>
          <Section onMouseLeave={mouseLeaveHandler} data-testid="section">
            {"Text"}
          </Section>
        </SectionGroupContext.Provider>
      );
      fireEvent.mouseLeave(testDOM.getByTestId("section"));
      expect(sectionGroupContext.setActive).toHaveBeenCalledWith(null);
      expect(mouseLeaveHandler).toHaveBeenCalled();
    });
  });
});
