import ElectionMenu from "../components/ElectionMenu";
import ListProducClient from "../components/ListProducClient";
import ProductMenu from "../components/ProductMenu";
import "../styles/Login.scss";
import "../styles/ProductMenu.scss";
import '../styles/ListProductClient.scss';

const MenuElectionPage: React.FC = () => {
  return (
    <div>
      <ElectionMenu />
      <ProductMenu />
      <ListProducClient/>
    </div>
  );
};
export default MenuElectionPage;
