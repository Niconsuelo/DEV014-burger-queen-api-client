import Product from "../models/Product";
import style from "../styles/ListProductBreakfast.module.scss";

interface ListProductBreakfastProps {
  addProduct: (product: string) => void;
  products: Product[];
}

const ListProductBreakfast: React.FC<ListProductBreakfastProps> = ({
  addProduct,
  products,
}) => {
  return (
    <div className={style.containerListProductBreakfast}>
    
        {products.map((product) => (
          <div className={style.electionProductList} key={product.id}>
            <button
              className={style.buttonProduct}
              onClick={() => addProduct(product.name)}
            >
              <div className={style.containerText}>
                <h2 className={style.textElectionProduct}>{product.name}</h2>
                <p className={style.textPrice}>${product.price}</p>
              </div>
            </button>
          </div>
        ))}
    </div>
  );
};

export default ListProductBreakfast;
