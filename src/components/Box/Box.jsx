import style from './Box.module.css';
import Screen from '../Screen';
import Button from '../Button';
import ButtonClear from '../ButtonClear';

const Box = () => {
    return(
        <div className={`${style.Box} bg-dark border border-dark rounded`}>
            <Screen />
            <div className={`${style.fila}`}>
                <Button value='1'/>
                <Button value='2'/>
                <Button value='3'/>
                <Button value='+'/>
            </div>
            <div className={`${style.fila}`}>
                <Button value='4'/>
                <Button value='5'/>
                <Button value='6'/>
                <Button value='-'/>
            </div>
            <div className={`${style.fila}`}>
                <Button value='7'/>
                <Button value='8'/>
                <Button value='9'/>
                <Button value='*'/>
            </div>
            <div className={`${style.fila}`}>
                <Button value='='/>
                <Button value='0'/>
                <Button value='.'/>
                <Button value='/'/>
            </div>
            <div className={`${style.fila}`}>
                <ButtonClear />
            </div>
        </div>
    )
}

export default Box;