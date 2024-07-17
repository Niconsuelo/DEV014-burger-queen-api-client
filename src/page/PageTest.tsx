import ElectionMenu from "../components/ElectionMenu";
import ListElectionLunch from "../components/ListElectionLunch";
import ListProductClient from "../components/ListProductClient";
import style from "../styles/MenuElectionPage.module.scss";

const MenuElectionPage: React.FC = () => {
  return (
    <>
      <div className={style.electionPage}>
        <div className={style.containerElectionProduct}>
          <ElectionMenu />
          <ListElectionLunch/>
        </div>
        <div>
          <ListProductClient />
        </div>
      </div>
    </>
  );
};
export default MenuElectionPage;
