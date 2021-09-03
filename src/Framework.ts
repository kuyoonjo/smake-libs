import { LLVM } from 'smake';

export interface Framework {
  framework(t: LLVM): void;
}

const fwFuncs: {
  [k: string]: (t: LLVM) => void;
} = {};

export function framework(Class: { new (): Framework }) {
  if (!fwFuncs[Class.name]) {
    const c = new Class();
    fwFuncs[Class.name] = (t: LLVM) => c.framework(t);
  }
  return fwFuncs[Class.name];
}
