import style from './Box.module.css';
import Screen from '../Screen';
import Button from '../Button';
import ButtonClear from '../ButtonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs'

const Box = () => {
    const [input, setInput] = useState('');
    const operation = (val) => {
        if (val !== '='){
            setInput(input + val)
        }else{
            setInput(evaluate(input))
        }
        
    } 
   
    return(
        <div className={`${style.Box} bg-dark border border-dark rounded`}>
            <Screen input={input}/>
            <div className={`${style.fila}`}>
                <Button value='1' onClick= {operation}/>
                <Button value='2' onClick= {operation}/>
                <Button value='3' onClick= {operation}/>
                <Button value='+' onClick= {operation}/>
            </div>
            <div className={`${style.fila}`}>
                <Button value='4' onClick= {operation}/>
                <Button value='5' onClick= {operation}/>
                <Button value='6' onClick= {operation}/>
                <Button value='-' onClick= {operation}/>
            </div>
            <div className={`${style.fila}`}>
                <Button value='7' onClick= {operation}/>
                <Button value='8' onClick= {operation}/>
                <Button value='9' onClick= {operation}/>
                <Button value='*' onClick= {operation}/>
            </div>
            <div className={`${style.fila}`}>
                <Button value='=' onClick= {operation}/>
                <Button value='0' onClick= {operation}/>
                <Button value='.' onClick= {operation}/>
                <Button value='/' onClick= {operation}/>
            </div>
            <div className={`${style.fila}`}>
                <ButtonClear clear={() => setInput('')}/>
            </div>
        </div>
    )
}

export default Box;