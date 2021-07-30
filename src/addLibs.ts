export function addLibs(target: any, ...libs: Function[]) {
  for (const lib of libs) {
    target = class extends target {
      constructor() {
        super();
        lib(this);
      }
    };
  }
  return target;
}
