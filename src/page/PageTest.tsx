import ElectionMenu from "../components/ElectionMenu";
import ListProductBreakfast from "../components/ListProductBreakfast";
import ListProductClient from "../components/ListProductClient";
import "../styles/MenuElectionPage.scss";

const MenuElectionPage: React.FC = () => {
  return (
    <>
      <div className="electionPage">
        <div className="containerElectionProduct">
          <ElectionMenu />
          <ListProductBreakfast />
        </div>
        <div>
          <ListProductClient />
        </div>
      </div>
    </>
  );
};
export default MenuElectionPage;
