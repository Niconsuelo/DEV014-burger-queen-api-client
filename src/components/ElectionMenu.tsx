import style from "../styles/ElectionMenu.module.scss";

const ElectionMenu: React.FC = () => {
  return (
    <div className={style.containerOptionsMenu}>
      <div className={style.containerOptionMenu}>
        <p className={style.textMenu}> DESAYUNO</p>
      </div>
      <div className={style.containerOptionMenu}>
      <p className={style.textMenu}>ALMUERZO</p>
      </div>
      
    </div>
  );
};

export default ElectionMenu;
