import ElectionMenu from "../components/ElectionMenu";
import ListProducClient from "../components/ListProducClient";
import ProductMenu from "../components/ProductMenu";
import "../styles/MenuElectionPage.scss";

const MenuElectionPage: React.FC = () => {
  return (
    <>
      <div className="electionPage">
        <div className="containerElectionProduct">
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
export default MenuElectionPage;
