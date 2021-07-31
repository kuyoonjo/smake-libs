export function addLibs(target: any, ...libs: Function[]) {
  const name = target.name;
  for (const lib of libs) {
    target = class extends target {
      constructor() {
        super();
        lib(this);
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
