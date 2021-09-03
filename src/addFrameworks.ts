import { deprecate } from 'util';
import { addLibs } from './addLibs';
import { framework } from './Framework';

function _addFrameworks(target: any, ...fws: any[]) {
  return addLibs(target, ...fws.map(framework));
}

export const addFrameworks = deprecate(
  _addFrameworks,
  'addFrameworks(...args) is deprecated. Use addLibs(...framework(arg)) instead.'
);
