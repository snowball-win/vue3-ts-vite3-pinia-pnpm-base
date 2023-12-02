export default function myRollupPlugin() {
    return {
      name: 'my-plugin',
      transform(code, id) {
        if (id.endsWith('canvas/index.vue')) {
            // 测试成功
            code = code.replace(/my-tag/g, 'div')
            // 测试失败
            // code = code.replace(/<my-tag>/g, '<div>').replace(/<\/my-tag>/g, '</div>');
        }
        return code;
      },
    };
  }