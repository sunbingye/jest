function getResponse(status) {
    if (status)
        // return new Promise((resolve) => {
        //     setTimeout(() => {resolve({
        //         success: true,
        //         data: {
        //             warehouseId: 6,
        //             warehouseName: 'STB 测试仓',
        //             employees: ['棋谷', '余霁'],
        //         },
        //     });  },1000)

        // });
        return Promise.resolve({
            success: true,
            data: {
                warehouseId: 6,
                warehouseName: 'STB 测试仓',
                employees: ['棋谷', '余霁'],
            },
        });
    // return new Promise((res, rej) => {
    //     throw new Error('404');
    //     rej()
    //  })
    return Promise.reject(new Error('404'));
}

// return
// test('测试 请求成功', () => {
//     // getResponse(true).then((res) => {
//     //     expect(res.success).toBeFalsy();
//     // }).catch(e => {
//     //     // console.log(`e:`, e)
//     // });
//     return getResponse(true).then((res) => {
//         expect(res).toEqual({
//             success: true,
//             data: {
//                 warehouseId: 7,
//                 warehouseName: 'STB 测试仓',
//                 employees: ['棋谷', '余霁'],
//             },
//         });
//     });
// });
// test('测试 请求成功', () => {
//     // getResponse(true).then((res) => {
//     //     expect(res.success).toBeFalsy();
//     // }).catch(e => {
//     //     // console.log(`e:`, e)
//     // });
//     return getResponse(true)
//         .then((res) => {
//             expect(res.success).toBeTruthy();
//         })
//         .catch((e) => console.log(`e:`, e));
// });
// test('测试 请求失败', () => {
//     expect.assertions(1);
//     return getResponse(false).catch((e) => {
//         expect(e).toEqual(
//             new Error({
//                 code: 404,
//             })
//         );
//     });
// });

// done
// test('测试 请求成功', (done) => {
//     getResponse(true)
//         .then((res) => {
//             expect(res.success).toBeFalsy();
//             done();
//         })
//         .catch((e) => console.log(`e:`, e));
// });

//resolves/rejects
// test('测试 请求成功', () => {
//     return expect(getResponse(true)).resolves.toEqual({
//         success: true,
//         data: {
//             warehouseId: 6,
//             warehouseName: 'STB 测试仓',
//             employees: ['棋谷', '余霁'],
//         },
//     });
// });
// test('测试 请求失败', () => {
//     return expect(getResponse(false)).rejects.toEqual(new Error('405'));
// });

//async await
// test('测试 请求成功', async () => {
//     const res = await getResponse(true);
//     expect(res.success).toBeTruthy();
// });
// test('测试 请求失败', async () => {
//     expect.assertions(1);
//     try {
//         await getResponse(false)
//     } catch(err) {
//         expect(err).toEqual(new Error('404'))
//     }

// });

//resolves/rejects with async await
test('测试 请求成功', async () => {
    await expect(getResponse(true)).resolves.toEqual({
        success: true,
        data: {
            warehouseId: 6,
            warehouseName: 'STB 测试仓',
            employees: ['棋谷', '余霁'],
        },
    });
});
test('测试 请求失败', async () => {
    expect.assertions(1);
    await expect(getResponse(false)).rejects.toEqual(new Error('404'));
});

// require
// test('测试 require', () => {
//     const axios = require('axios');
//     const request = (fn) => {
//         return axios.get('https://jsonplaceholder.typicode.com/todos/331');
//     };
//     return request()
//         .then((res) => {
//             expect(res.data).toEqual({ userId: 1, id: 1, title: 'delectus aut autem', completed: false });
//         })
//         .catch((e) => {
//             console.log(`e:`, e);
//         });
// });

// function a() {
//     setTimeout(() => { return 3 },1000)
// }
// test('444',() => { expect(a()).toBe(3) })

// import axios from 'axios';
// export const request = () => {
//     return axios.get('https://jsonplaceholder.typicode.com/todos/1')
// }
// test('测试request', () => {
//     return  request().then(data => {
//         expect(data.data).toEqual({
//             "userId": 3,
//             "id": 1,
//             "title": "delectus aut autem",
//             "completed": false
//           })
//     }).catch()
// })
