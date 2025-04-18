import React from 'react'
import "../style.css"
import { useState } from 'react'

const Calculator = () => {
    const [inputValue, setInputValue] = useState("");
    const clear = () => setInputValue("")

    const display = (value) => {
        setInputValue(inputValue + value)
    }

    const calculate = () => {
        setInputValue(eval(inputValue))
    }

    return (
        <form name="calc" className="calculator">
            <input type="text" value={inputValue} readOnly />

            {/* Row 1 */}
            <span className="clear" onClick={clear}>C</span>
            <span className="divide" onClick={() => display('/')}>÷</span>
            <span className="multiply" onClick={() => display('*')}>×</span>
            <span className="subtract" onClick={() => display('-')}>−</span>

            {/* Row 2 */}
            <span className="seven" onClick={() => display('7')}>7</span>
            <span className="eight" onClick={() => display('8')}>8</span>
            <span className="nine" onClick={() => display('9')}>9</span>
            <span className="add" onClick={() => display('+')}>+</span>

            {/* Row 3 */}
            <span className="four" onClick={() => display('4')}>4</span>
            <span className="five" onClick={() => display('5')}>5</span>
            <span className="six" onClick={() => display('6')}>6</span>
            <span className="decimal" onClick={() => display('.')}>.</span>


            {/* Row 4 */}
            <span className="one" onClick={() => display('1')}>1</span>
            <span className="two" onClick={() => display('2')}>2</span>
            <span className="three" onClick={() => display('3')}>3</span>
            <span className="equal" onClick={calculate}>=</span>

            {/* Row 5 */}
            <span className="zero" onClick={() => display('0')}>0</span>
            <span className="double" onClick={() => display('00')}>00</span>
        </form>
    )
}

export default Calculator