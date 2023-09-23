import style from './Button.module.css';
import propTypes from 'prop-types';

const Button = ({value, onClick}) =>{
    const isOperator = val => {
        return isNaN(val) && (val !== '.') && (val !== '=');
    }

    return(
        <div className={`${style.Button} 
        ${isOperator(value) ? style.operator : ''} 
        border border-white 
        d-flex
        rounded`}
        onClick={() => onClick(value)}>
            {value}
        </div>
    )
}

Button.propTypes = {
    value: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired
}
export default Button;