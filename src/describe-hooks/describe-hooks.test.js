function BasicMath() {
    this.num = 2;
    this.increase = () => {
        this.num++;
    };
    this.increase = () => {
        this.num++;
    };
    this.decrease = () => {
        this.num--;
    };
    this.double = () => {
        this.num *= 2;
    };
    this.half = () => {
        this.num /= 2;
    };
}

//
describe('分别测试 BasicMath 的四种运算方法', () => {
    let bm;
    // beforeAll(() => {
    //     console.log('before all tests!');
    // });

    beforeEach(() => {
        // console.log('before each test!');
        bm = new BasicMath();
    });

    // afterAll(() => {
    //     console.log('after all tests!');
    // });

    // afterEach(() => {
    //     console.log('after each test!');
    // });

    test('测试increase', () => {
        bm.increase();
        expect(bm.num).toBe(3);
        // console.log(bm.num);
    });
    test('测试decrease', () => {
        bm.decrease();
        expect(bm.num).toBe(1);
        // console.log(bm.num);
    });
    test('测试double', () => {
        bm.double();
        expect(bm.num).toBe(4);
        // console.log(bm.num);
    });
    test('测试half', () => {
        bm.half();
        expect(bm.num).toBe(1);
        // console.log(bm.num);
    });
});

// let bm = new BasicMath();
// console.log(bm.num);
// bm.increase();
// console.log(bm.num);
// bm.decrease();
// console.log(bm.num);
// bm.double();
// console.log(bm.num);
// bm.half();
// console.log(bm.num);
