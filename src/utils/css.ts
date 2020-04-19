export interface Bem {
  name: string;
}

export interface BemBlock extends Bem {
  name: string;
  elem: (strings: TemplateStringsArray, ...args: string[]) => BemElem;
  mod: (strings: TemplateStringsArray, ...args: string[]) => BemMod;
}

export interface BemElem extends Bem {
  name: string;
  mod: (strings: TemplateStringsArray, ...args: string[]) => BemMod;
}

export interface BemMod extends Bem {}

const parse = (strings: TemplateStringsArray, ...args: string[]) =>
  strings.reduce((acc, string) => `${acc}${args.shift()}${string}`);

export const bem = (
  blockStrings: TemplateStringsArray,
  ...blockArgs: string[]
): BemBlock => ({
  name: parse(blockStrings, ...blockArgs),
  elem: (
    elemStrings: TemplateStringsArray,
    ...elemArgs: string[]
  ): BemElem => ({
    name: `${parse(blockStrings, ...blockArgs)}__${parse(
      elemStrings,
      ...elemArgs
    )}`,
    mod: (modStrings: TemplateStringsArray, ...modArgs: string[]): BemMod => ({
      name: `${parse(blockStrings, ...blockArgs)}__${parse(
        elemStrings,
        ...elemArgs
      )}--${parse(modStrings, ...modArgs)}`
    })
  }),
  mod: (modStrings: TemplateStringsArray, ...modArgs: string[]): BemMod => ({
    name: `${parse(blockStrings, ...blockArgs)}--${parse(
      modStrings,
      ...modArgs
    )}`
  })
});

export const classes = (...cssClasses: Array<Bem | string>) =>
  cssClasses.map(c => (typeof c === "string" ? c : c.name)).join(" ");
