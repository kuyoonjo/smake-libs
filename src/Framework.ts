import { LLVM } from 'smake';

export interface Framework {
  framework(t: LLVM): void;
}
