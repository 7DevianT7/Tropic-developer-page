import ListItem from "./ListItem"; 
import GlobalButton from "../../../components/globalbutton/GlobalButton";

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="state-list-items">
      <h3 className="items-header">Products</h3>
      {products.map(product => (
        <ListItem
          key={product.id}
          image={product.image}
          itemName={product.name}
          price={Number(product.price)} 
          desc={product.description}
          actionButton={
            <GlobalButton
              displayText="Add to Cart"
              onClick={() => onAddToCart(product)}
            />
          }
        />
      ))}
    </div>
  );
};

export default ProductList;