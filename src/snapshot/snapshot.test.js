import { getServerConfig } from './getServerConfig.js';

// // test('快照测试 getServerConfig', () => {
// //     expect(getServerConfig()).toEqual({
// //         server: 'https://test.com',
// //         port: '80',
// //     });
// // });

// test('快照测试 getServerConfig', () => {
//     expect(getConfig()).toMatchSnapshot();
// });

test('快照测试 getServerConfig', () => {
    expect(getServerConfig()).toMatchSnapshot();
});
