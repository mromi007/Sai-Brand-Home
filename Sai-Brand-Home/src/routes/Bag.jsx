import BagSummary from "../components/BagSummary";
import CartItem from "../components/CartItem";
import {useSelector} from "react-redux";

const Bag = () => {
  const bagItems = useSelector(state => state.bag);
  const items = useSelector(state => state.items);
  const finalItems = items.filter(item => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });



  return (
    <>
      <main>
        <div class="bag-page">
          <div class="bag-items-container">
            {finalItems.map((item) => (
            <CartItem item={item}></CartItem>
            ))}
          </div>
          <BagSummary></BagSummary>
          <div class="bag-summary"></div>
        </div>
      </main>
    </>
  );
};

export default Bag;
