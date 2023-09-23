import style from './ButtonClear.module.css';

const ButtonClear = () => {
    return(
        <div className={` ${style.ButtonClear}
        bg-secondary 
        border border-white 
        d-flex
        rounded`}>
            Clear
        </div>
    )
}

export default ButtonClear;