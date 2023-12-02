// plugins/include-view1.js
export default function includeView1(options = {}) {
    console.log('3--options', options)
    const { build } = options;
    const { rollup } = build;
    const { resolve } = rollup.utils;
  
    // 在构建过程中添加自定义的包含规则
    rollup.on('bundle', async (bundle) => {
      const view1Files = await bundle.walk(resolve('views/canvas/**/*.vue'));
      view1Files.forEach((file) => {
        file.fileName = 'views/canvas/' + file.fileName; // 重置文件的相对路径为相对于项目的根目录
        bundle.addAsset(file); // 将文件添加到构建的资产中
      });
    });
  }