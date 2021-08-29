import * as index from '../src/index';

test('Should have addLibs available', () => {
  expect(index.addLibs).toBeTruthy();
  expect(index.addFrameworks).toBeTruthy();
});
