const ListItem = ({ image, itemName, price, desc, actionButton }) => {
  return (
    <div className='list-item'>
      {image}
      <div>
        <p className='item-name-price'>{itemName} - ${price.toFixed(2)}</p>
        <p className='item-desc'>{desc}</p>
      </div>
      {actionButton}
    </div>
  );
};

export default ListItem;