import { addLibs } from '../src/addLibs';

test('addLibs', () => {
  class A {}
  function f(a: any) {
    a.a = 'a';
    a.c = 0;
  }
  function g(a: any) {
    a.b = 'b';
    a.c++;
  }

  function h(a: any) {
    a.b = 'b';
    a.c++;
  }

  const i = [f, g, h];
  const B = addLibs(A, f, g, i, h);
  const b = new B();
  expect(b.a).toBe('a');
  expect(b.b).toBe('b');
  expect(b.c).toBe(2);

  const C = addLibs(B, f, f);
  expect(C.__deps.size).toBe(3);
});
