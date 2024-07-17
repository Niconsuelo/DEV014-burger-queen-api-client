import ElectionMenu from "../components/ElectionMenu";
import ListProductClient from "../components/ListProductClient";
import ListProductDrink from "../components/ListProductDrink";
import style from "../styles/MenuElectionPage.module.scss";

const MenuElectionPage: React.FC = () => {
  return (
    <>
      <div className={style.electionPage}>
        <div className={style.containerElectionProduct}>
          <ElectionMenu />
          <ListProductDrink/>
        </div>
        <div>
          <ListProductClient />
        </div>
      </div>
    </>
  );
};
export default MenuElectionPage;
