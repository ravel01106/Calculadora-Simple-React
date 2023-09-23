import style from './Button.module.css';
import propTypes from 'prop-types';

const Button = ({value}) =>{
    return(
        <div className={`${style.Button} 
        bg-secondary 
        border border-white 
        d-flex
        rounded`}>
            {value}
        </div>
    )
}

Button.propTypes = {
    value: propTypes.string.isRequired
}
export default Button;