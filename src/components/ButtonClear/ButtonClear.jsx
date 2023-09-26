import style from './ButtonClear.module.css';
import propTypes from 'prop-types';

const ButtonClear = ({ clear }) => {
  return (
    <div
      className={` ${style.ButtonClear}
        border border-white 
        d-flex
        rounded`}
      onClick={clear}
    >
      Clear
    </div>
  );
};

ButtonClear.propTypes = {
  clear: propTypes.func
};

export default ButtonClear;
