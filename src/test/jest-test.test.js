import { add, getLength } from './jest-test';

test('测试 加法', () => {
    expect(add(1, 3)).toBe(4);
});

test('测试 获取长度', () => {
    expect(getLength('123')).toBe(3);
});
test('测试 获取长度', () => {
    expect(getLength([1, 2])).toBe(2);
});
test('测试 获取长度', () => {
    expect(getLength()).toBe('val does not have property named length');
});
