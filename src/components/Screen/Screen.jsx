import style from './Screen.module.css';
import propTypes from 'prop-types';
const Screen = ({input}) =>{
    return (
        <div className={`${style.Screen} bg-secondary rounded`}>
            {input}
        </div>
    )
}

Screen.propTypes = {
    input: propTypes.string.isRequired
}

export default Screen;