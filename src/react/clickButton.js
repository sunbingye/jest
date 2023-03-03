import { useState } from 'react';

export default function ClickButton(props) {
    const [labeText, setLabeText] = useState('nothing was clicked');
    const handleButton1Click = () => {
        setLabeText('button1 was clicked');
    };
    const handleButton2Click = () => {
        setLabeText('button2 was clicked!w');
    };
    return (
        <>
            <label>{labeText}</label>
            <button onClick={handleButton1Click}>button1</button>
            <button onClick={handleButton2Click}>button2</button>
        </>
    );
}
