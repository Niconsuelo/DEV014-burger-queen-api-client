import style from "../styles/ElectionMenu.module.scss";

interface ElectionMenuProps {
  onMenuChange: (menu: "breakfast" | "lunch" | "none")  => void;
}

const ElectionMenu: React.FC<ElectionMenuProps> = ({ onMenuChange }) => {
  return (
    <div className={style.containerOptionsMenu}>
      <div className={style.containerOptionMenu}>
        <button
          onClick={() => onMenuChange("breakfast")}
          className={style.containerOptionMenu}
        >
          {" "}
          DESAYUNO
        </button>
      </div>
      <div className={style.containerOptionMenu}>
        <button
          onClick={() => onMenuChange("lunch")}
          className={style.containerOptionMenu}
        >
          {" "}
          ALMUERZO
        </button>
      </div>
    </div>
  );
};

export default ElectionMenu;
