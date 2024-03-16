const HomeItem = ({item}) =>{
  return (
    <>
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="company-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      <button className="btn-add-bag" onClick={() => console.log("item was click") }>Add to Bag</button>
    </div></>
  )
}
export default HomeItem