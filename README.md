# SMake 三方库支持

## 安装
```
npm i -D @smake/libs
```
## 使用方法
```js
const { LLVM_Darwin } = require('smake');
const { addLibs } = require('@smake/libs');

class A extends LLVM_Darwin {
  files = ['src/main.cc'];
}

A = addLibs(A, lib1, lib2, ...);
```

