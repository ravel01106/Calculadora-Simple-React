import style from './Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={`${style.Header} text-white pb-3 pt-1`}>
        Calculadora Simple
      </h1>
    </div>
  );
};

export default Header;
