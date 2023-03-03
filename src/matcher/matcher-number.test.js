// toBeGreaterThan
test('toBeGreaterThan', () => {
    const num = 1
    expect(num).toBeGreaterThan(0)
})

// toBeGreaterThanOrEqual
test('toBeGreaterThanOrEqual', () => {
    const num = 1
    expect(num).toBeGreaterThanOrEqual(1)
})

// toBeLessThan
test('toBeLessThan', () => {
    const num = 1
    expect(num).toBeLessThan(2)
})

// toBeLessThanOrEqual
test('toBeLessThanOrEqual', () => {
    const num = 1
    expect(num).toBeLessThanOrEqual(1)
    expect(num).toBeLessThanOrEqual(2)
})

// toBeCloseTo
// test('toBe', () => {
//     const sum = 0.1 + 0.2
//     expect(sum).toBe(0.3)
// })

test('toBeCloseTo', () => {
    const sum = 0.1 + 0.2
    expect(sum).toBeCloseTo(0.3)
})
