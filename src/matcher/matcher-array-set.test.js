// toContain toContainEqual toHaveLength
function getUser(ids) {
    const users = [
        { id: 1, name: '棋谷' },
        { id: 2, name: '棋谷' },
        { id: 3, name: '余霁' },
    ];
    return users.filter((u) => ids.find((id) => id === u.id));
}
test('测试 数组/集合 matchers', () => {
    // expect(getUser([1, 2])).toContain({ id: 1, name: '棋谷' });
    expect(getUser([1, 2])).toContainEqual({ id: 1, name: '棋谷' });
    expect(new Set(getUser([1, 2]).map((u) => u.name))).toContain('棋谷');
    expect(getUser([1, 2])).toHaveLength(2);
});
