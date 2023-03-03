// toMatch
test('测试 字符串', () => {
    const str = 'Warehouse Manage System'
    expect(str).toMatch(/Ware/)
    expect(str).toMatch('Ware')
})