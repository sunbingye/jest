// toThrow
const fn1 = () => {
    console.log('hello');
};
const fn2 = () => {
    throw new Error('this is a new err');
};

test('测试 有异常', () => {
    // expect(fn1).toThrow(); // 不通过
    expect(fn2).toThrow(); // 通过
});
