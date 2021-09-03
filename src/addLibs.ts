export function addLibs(target: any, ...libs: any[]) {
  const name = target.name;
  const deps: Set<any> = target.__deps || new Set();

  for (const lib of new Set(libs.flat(100))) {
    if (!deps.has(lib)) {
      deps.add(lib);
      target = class extends target {
        constructor() {
          super();
          lib(this);
        }
      };
      Object.defineProperty(target, '__deps', {
        value: deps,
        configurable: true,
      });
    }
  }
  delete target.name;
  Object.defineProperty(target, 'name', {
    value: name,
    configurable: true,
  });
  return target;
}
