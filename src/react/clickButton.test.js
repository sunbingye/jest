import renderer from 'react-test-renderer';
import ClickButton from './clickButton';

test('changes the class when hovered', () => {
    const component = renderer.create(<ClickButton />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
console.log(`tree:`,tree);
    // 手动出发 button1 点击事件
    renderer.act(() => {
        tree[1].props.onClick();
    });
    // 重绘
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // 手动出发 button2 点击事件
    renderer.act(() => {
        tree[2].props.onClick();
    });
    // 重绘
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
