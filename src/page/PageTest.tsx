import ElectionMenu from "../components/ElectionMenu";
import ListProductAccompaniment from "../components/ListProductAccompaniment";
import ListProductClient from "../components/ListProductClient";
import style from "../styles/MenuElectionPage.module.scss";

const MenuElectionPage: React.FC = () => {
  return (
    <>
      <div className={style.electionPage}>
        <div className={style.containerElectionProduct}>
          <ElectionMenu />
          <ListProductAccompaniment/>
        </div>
        <div>
          <ListProductClient />
        </div>
      </div>
    </>
  );
};
export default MenuElectionPage;
