import { addLibs } from '../src/addLibs';

test('addLibs', () => {
  class A {}
  function f(a: any) {
    a.a = 'a';
  }
  function g(a: any) {
    a.b = 'b';
  }
  const B = addLibs(A, f, g);
  const b = new B();
  expect(b.a).toBe('a');
  expect(b.b).toBe('b');
});
