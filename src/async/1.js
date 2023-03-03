// function getResponse(status) {
//     if (status)
//         return Promise.resolve({
//             success: true,
//             data: {
//                 warehouseId: 6,
//                 warehouseName: 'STB 测试仓',
//                 employees: ['棋谷', '余霁'],
//             },
//         });
//     // return Promise.resolve(
//     //     new Error({ code: 404 })
//     // );
//     // return Promise.reject(
//     //     new Error({ code: 404 })
//     // );
//     return new Promise((res, rej) => {
//         res(new Error({ code: 404 }))
//         // rej( new Error({ code: 404 }))
//         console.log(`rr`);
//         throw new Error({ code: 404 });
//         throw new Error({ code: 404 });
//         throw new Error({ code: 404 });
//     });
// }
// try {
//     getResponse(false).catch((e) => {
//         console.log('00', e,);
//         // expect(e).toEqual(
//         //     {
//         //         code: 404,
//         //     }
//         // );
//     });
// } catch (e) {
//     console.log(`eeee:`, e);
// }
// console.log(false<0.1);
function uu() {
    let a = 1;
    const fn = () => {
        a = 2;
    };
    fn();
    console.log(a);
}
uu();
