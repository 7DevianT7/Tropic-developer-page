const ListItem = ({ image, itemName, price, desc, actionButton }) => {
  return (
    <div className='list-item'>
      {image}
      <div>
        <p className='item-name-price'>{itemName} - {price}$</p>
        <p className='item-desc'>{desc}</p>
      </div>
      {actionButton}  {/* koristi ono što šalješ iz ProductList */}
    </div>
  );
};

export default ListItem;
