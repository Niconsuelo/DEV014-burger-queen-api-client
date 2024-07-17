import ElectionMenu from "../components/ElectionMenu";
import ListProductClient from "../components/ListProductClient";
import style from "../styles/MenuElectionPage.module.scss";
import ListProductLunch from "../components/ListProductLunch";

const MenuElectionPage: React.FC = () => {
  return (
    <>
      <div className={style.electionPage}>
        <div className={style.containerElectionProduct}>
          <ElectionMenu />
         <ListProductLunch/>
        </div>
        <div>
          <ListProductClient />
        </div>
      </div>
    </>
  );
};
export default MenuElectionPage;
