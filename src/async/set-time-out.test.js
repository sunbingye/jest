function timer(fn, time) {
    setTimeout(() => {
        fn();
    }, time);
}

// test('测试 setTimeout', (done) => {
//     timer(() => {
//         expect(1 + 1).toBe(2);
//         done();
//     }, 3000);
// });

// fakeTimers
test('测试 fakeTimers', () => {
    let a = 1;
    jest.useFakeTimers(); // 启动fakeTimers
    const fn = () => { a = 2 };
    timer(fn, 3000);
    // 时间快进5秒
    jest.advanceTimersByTime(3000); // 立即跳过这个时间
    expect(a).toBe(2);
});
