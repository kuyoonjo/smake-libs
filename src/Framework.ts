import { LLVM } from 'smake';

export interface Framework {
  framework(t: LLVM): void;
}

export function framework(Class: { new (): Framework }) {
  const c = new Class();
  return c.framework;
}
