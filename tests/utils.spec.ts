import {formatNumber} from '../src/utils/index'
test('格式化数字123456显示为123,456', () => {
  expect(formatNumber('123456')).toBe('123,456');
})