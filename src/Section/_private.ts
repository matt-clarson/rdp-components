import { createContext } from "react";

export interface ISectionGroupContext {
  active: string | null;
  setActive?: (active: string | null) => void;
}

export const SectionGroupContext = createContext<ISectionGroupContext>({
  active: null
});
