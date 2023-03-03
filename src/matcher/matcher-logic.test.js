// toBe
test('测试乘法结合律', () => {
    let a = 2,
        b = 3,
        c = 4;
    expect(a * b + a * c).toBe(a * (b + c));
});

// toEqual
function getUser(id) {
    const users = [
        { id: 1, name: '棋谷' },
        { id: 2, name: '余霁' },
    ];
    return users.find((u) => u.id === id);
}
test('测试 处理 CnTable 标准返回值', () => {
    expect(getUser(1)).toEqual({ id: 1, name: '棋谷' });
});

// toBeNull
const value = null;
test('测试值是否为 null', () => {
    // expect(getUser(3)).toBeNull();
    expect(value).toBeNull();
});

// toBeUndefined
// test('测试值是否为 undefined', () => {
//     expect(getUser(3)).toBeUndefined(); // ✅ 通过
//     expect(value).toBeUndefined(); // ❌ 不通过
// });

// toBeDefined
const val = 1;
test('测试 值是否被定义过', () => {
    expect(val).toBeDefined();
});

// toBeTruthy
// test('测试 是否为真值', () => {
//     expect(0).toBeTruthy(); // ❌ 不通过
//     expect('').toBeTruthy(); // ❌ 不通过
//     expect(null).toBeTruthy(); // ❌ 不通过
//     expect(false).toBeTruthy(); // ❌ 不通过
//     expect(undefined).toBeTruthy(); // ❌ 不通过
// });

// toBeFalsy
test('测试 是否为假值', () => {
    expect(0).toBeFalsy(); // ✅ 通过
    expect('').toBeFalsy(); // ✅ 通过
    expect(null).toBeFalsy(); // ✅ 通过
    expect(false).toBeFalsy(); // ✅ 通过
    expect(undefined).toBeFalsy(); // ✅ 通过
});

// not
test('测试 not', () => {
    const val = 10;
    expect(val).not.toBe(11);
    expect(val).not.toBeFalsy();
    expect(val).toBeTruthy();
});
