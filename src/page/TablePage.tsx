import NavBar from "../components/NavBar";
import '../App.scss';
import OrderTable from "../components/OrderTable";
import '../styles/OrderTable.scss';


const TablePage: React.FC = () => {
  return (
   <div>
   <NavBar/>
   <OrderTable/>
  </div>
    );
};
export default TablePage;