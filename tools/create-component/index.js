#!/usr/bin/env node

// create new component
// ======================================================
// - js
//   - new cpt: Xx.js
//   - entry: js/index.js
// - scss
//   - new cpt
//   - entry: scss/amazeui.touch.scss
// - doc
//   - sidebar 手动填写
//   - dirctory
//     - index.js
//     - api.md
// - kitchen-sink
//   - Example
//   - index.js
//   - Default.js 手动填写

const name = process.argv[2];
const fs = require('fs');
const path = require('path');
const resolve = path.resolve;
const cwd = process.cwd();
const colors = require('colors');

if(!name) {
  console.log('未定义组件名'.red);
  console.log('使用 npm run crcpt -- XX'.green);
  return
}

const nameLowerCase = name.toLowerCase();
const nameCapFirst = nameLowerCase[0].toUpperCase() + nameLowerCase.slice(1);
const config = {
  'js': resolve(cwd, 'js'),
  'scss': resolve(cwd, 'scss/'),
  'docs': resolve(cwd, 'docs/'),
  'kit': resolve(cwd, 'kitchen-sink/pages/')
}

const content = {
  documentMDTemplate() {
    return `# ${name}

## 示例`
  },
  documentJSTemplate() {
    const docJStpl = fs.readFileSync(resolve(__dirname, './documentJSTemplate.js'), 'utf-8');
    return docJStpl.replace(/cptName/g, name)
  },
  exampleTemplate() {
    const cptExample = fs.readFileSync(resolve(__dirname, './exampleTemplate.js'), 'utf-8');
    return cptExample.replace(/cptName/g, name)
  },
  scssTemplate() {
    return `// Amaze UI Touch: ${name}
// =============================================================================

@import "../env";`
  },
  jsComponentTemplate() {
    return fs.readFileSync(resolve(__dirname, './jsComponentTemplate.js'), 'utf-8').replace(/cptName/g, name);
  }
}


// Document：
// PATH: [/docs]
// create cpt dirctory [/docs/components]
// change index.js file [/docs/components]
// [/docs/js/Sidebar] change this manually
const createDocumentTemplate = () => {
  const cur = `${config.docs}/components/${nameLowerCase}`;
  const cptIndex = `${config.docs}/components/index.js`;
  const api = content.documentMDTemplate();
  const js = content.documentJSTemplate();

  if(fs.existsSync(cur)) {
    console.log('文档目录已存在'.yellow)
    return
  }

  fs.mkdirSync(cur);
  console.log('文档目录创建成功'.green);

  fs.writeFile(`${cur}/api.md`, api, () => {
    console.log('文档 api.md 创建写入成功'.green)
  })
  fs.writeFile(`${cur}/index.js`, js, () => {
    console.log('文档 index.js 创建写入成功'.green)
  })

  fs.writeFile(cptIndex,
    `export ${nameLowerCase} from './${nameLowerCase}';`,
    { flag: 'a' },
    () => {console.log('docs/component index.js 入口改写成功'.green)}
  );
}


// Example：
// PATH: [/kitchen-sink]
// create _cptExample.js file [/kitchen-sink/pages]
// change index.js file [/kitchen-sink/pages]
// change Default.js file [/kitchen-sink/pages]  change this manually
const createKitchenSink = () => {
  const e = content.exampleTemplate();
  const cur = `${config.kit}/${name}Example.js`;

  if(fs.existsSync(cur)) {
    console.log('kitchen-sink example 已存在'.yellow)
    return
  }

  fs.writeFileSync(cur, e);
  console.log('kitchen-sink example 写入成功'.green);

  fs.writeFile(`${config.kit}/index.js`,
    `
export ${nameCapFirst} from './${name}Example';`,
    { flag: 'a' },
    () => {console.log('kiechen-sink index.js 入口改写成功'.green)}
  );
}

// Component： create _cpt.scss file & change amazeui.touch.scss
// PATH: [/scss]
const createScss = () => {
  const cur = `${config.scss}/components/_${nameLowerCase}.scss`;
  const cpt = content.scssTemplate();

  if(fs.existsSync(cur)) {
    console.log('scss 文件已存在'.yellow)
    return
  }

  fs.writeFileSync(cur, cpt);
  console.log('组件.scss 写入成功'.green);

  fs.writeFile(`${config.scss}/amazeui.touch.scss`,
    `@import "components/${nameLowerCase}";`,
    { flag: 'a' },
    () => {console.log('amazeui.touch.scss 入口改写成功'.green)}
  )
}

// Component： create Cpt.js file & change index.js
// PATH: [/js]
const createJS = () => {
  const cur = `${config.js}/${name}.js`;
  const jsEntry = `${config.js}/index.js`;
  const cpt = content.jsComponentTemplate();
  const regFlag = `export View from './View';`;

  if(fs.existsSync(cur)) {
    console.log('js 文件已存在'.yellow)
    return
  }

  fs.writeFileSync(cur, cpt);
  console.log('组件.js 写入成功'.green);

  let jsEntryCpt = fs.readFileSync(jsEntry, 'utf-8');
  jsEntryCpt = jsEntryCpt.replace(regFlag, `${regFlag}
export ${name} from './${name}';`);
  fs.writeFile(jsEntry, jsEntryCpt, () => {
    console.log('js 入口改写成功'.green)
  });
}

// excute
createDocumentTemplate();
createKitchenSink()
createScss();
createJS();

console.log('[/docs/js/Sidebar.js] 需要手动修改'.red)
console.log('[/kitchen-sink/pages/Default.js] 需要手动修改'.red)
