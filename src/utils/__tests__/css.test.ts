import * as css from "../css";

describe("css", () => {
  describe(".bem``", () => {
    it.each`
      call                                                     | expected
      ${() => css.bem`block`.name}                             | ${"block"}
      ${() => css.bem`block`.elem`element`.name}               | ${"block__element"}
      ${() => css.bem`block`.elem`element`.mod`modifier`.name} | ${"block__element--modifier"}
      ${() => css.bem`block`.mod`modifier`.name}               | ${"block--modifier"}
    `("should produce $expected", ({ call, expected }) => {
      expect(call()).toEqual(expected);
    });
  });

  describe(".classes", () => {
    it.each`
      name        | args                                         | expected
      ${"string"} | ${["class1", "class2"]}                      | ${"class1 class2"}
      ${"bem"}    | ${[css.bem`class1`, css.bem`class2`.mod`a`]} | ${"class1 class2--a"}
      ${"mixed"}  | ${["class1", css.bem`class2`.elem`x`]}       | ${"class1 class2__x"}
    `("should join $name args", ({ args, expected }) => {
      expect(css.classes(...args)).toEqual(expected);
    });
  });
});
