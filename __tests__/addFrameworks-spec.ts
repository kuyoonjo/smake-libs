import { Framework } from '../src/Framework';
import { addFrameworks } from '../src/addFrameworks';

test('addFrameworks', () => {
  class A {}
  class F implements Framework {
    framework(t: any) {
      t.a = 'a';
    }
  }
  class G implements Framework {
    framework(t: any) {
      t.b = 'b';
    }
  }
  const B = addFrameworks(A, F, G);
  const b = new B();
  expect(b.a).toBe('a');
  expect(b.b).toBe('b');
});
