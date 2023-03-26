import React, {useState} from 'react';
import './style/style.scss'

const Header = () => {
    const [countOne, setCountOne] = useState("")
    const [countTwo, setCountTwo] = useState("")
    const [result, setResult] = useState(0)
    const [selectValue, setSelectValue] = useState("/")

const answer = [
    {
        value:Math.round(Math.random() * 10)
    },
    {
        value:Math.round(Math.random() * 10)
    },
    {
        value:Math.round(Math.random() * 10)
    },
    {
        value:Math.round(Math.random() * 10)
    },
]
    function resultNumber() {
            if ( selectValue === "/" ){
                setResult(countOne / countTwo)
            }
            else if (selectValue === "*"){
                setResult(countOne * countTwo)
            }else if(selectValue === "+") {
                setResult(+countOne + +countTwo)
            }
            setCountOne("")
            setCountTwo("")
            }
    return (
        <div className="container">
            <center>
                <input type="number"
                       value={countOne}
                       onChange={(e => setCountOne(e.target.value))}

                /><br/>
                <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                    <option value="/">/</option>
                    <option value="*">*</option>
                    <option value="+">+</option>
                </select>
                <br/>
                <input type="number"
                       value={countTwo}
                       onChange={(e => setCountTwo(e.target.value))}
                /><br/>
                <button onClick={resultNumber}>click</button><br/>
                <button onClick={resultNumber}>click</button><br/>
                <button onClick={resultNumber}>click</button><br/>
                <button onClick={resultNumber}>click</button><br/>
                <span>result:{result}</span>
            </center>
           </div>
    );
};

export default Header;