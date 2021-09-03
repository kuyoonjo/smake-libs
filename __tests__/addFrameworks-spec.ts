import { framework, Framework } from '../src/Framework';
import { addFrameworks } from '../src/addFrameworks';
import { addLibs } from '../src/addLibs';

test('addFrameworks', () => {
  class A {}
  class F implements Framework {
    framework(t: any) {
      t.a = 'a';
      t.c = 0;
    }
  }
  class G implements Framework {
    framework(t: any) {
      t.b = 'b';
      t.c++;
    }
  }
  const B = addFrameworks(A, F, G, G, G);
  const b = new B();
  expect(b.a).toBe('a');
  expect(b.b).toBe('b');
  expect(b.c).toBe(1);
});

test('addLibs with framework', () => {
  class A {}
  class F implements Framework {
    framework(t: any) {
      t.a = 'a';
      t.c = 0;
    }
  }
  class G implements Framework {
    framework(t: any) {
      t.b = 'b';
      t.c++;
    }
  }
  let B = addLibs(A, framework(F), framework(G), framework(G), framework(G));
  B = addLibs(A, framework(F), framework(G), framework(G), framework(G));
  const b = new B();
  expect(b.a).toBe('a');
  expect(b.b).toBe('b');
  expect(b.c).toBe(1);
});
