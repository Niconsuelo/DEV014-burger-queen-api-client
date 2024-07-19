import ElectionMenu from "../components/ElectionMenu";
import ListProducClient from "../components/ListProductClient";
import ProductMenu from "../components/ProductMenu";
import style from "../styles/MenuElectionPage.module.scss";

const PageTest: React.FC = () => {
  return (
    <>
      <div className={style.electionPage}>
        <div className={style.containerElectionProduct}>
          <ElectionMenu />
          <ProductMenu />
        </div>
        <div>
          <ListProducClient />
        </div>
      </div>
    </>
  );
};
export default PageTest;
