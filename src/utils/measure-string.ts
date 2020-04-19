import { useMemo } from "react";

let testElement: HTMLElement;

const createTestElement = () => {
  if (!testElement) {
    testElement = document.createElement("div");
    Object.assign(testElement.style, {
      position: "absolute",
      visibility: "hidden",
      height: "auto",
      width: "auto",
      whiteSpace: "nowrap"
    });
  }
  return testElement;
};

export const measureString = (s: string) => {
  const el = createTestElement();
  el.innerHTML = s;
  document.body.append(el);
  const width = Math.ceil(el.clientWidth);
  const height = Math.ceil(el.clientHeight);
  document.body.removeChild(el);
  return { width, height };
};

export const useMeasureString = (s: string) => {
  return useMemo(() => measureString(s), [s]);
};
