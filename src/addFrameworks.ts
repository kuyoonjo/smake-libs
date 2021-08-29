export function addFrameworks(target: any, ...fws: any[]) {
  const name = target.name;
  for (const fw of fws) {
    target = class extends target {
      constructor() {
        super();
        const o = new fw();
        o.framework(this);
      }
    };
  }
  delete target.name;
  Object.defineProperty(target, 'name', {
    value: name,
    configurable: true,
  });
  return target;
}
