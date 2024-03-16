import BagSummary from "../components/BagSummary";
import CartItem from "../components/CartItem";
import Images from "../../src/Images/img5.jpg";

const Bag = () => {
  const item = {
    id: "001",
    image: Images,
    company: "Carlton London",
    item_name: "Rhodium-Plated CZ Floral Studs",
    original_price: 1045,
    current_price: 606,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.5,
      count: 1400,
    },
  };
  return (
    <>
      <main>
        <div class="bag-page">
          <div class="bag-items-container">
          <CartItem item={item}></CartItem>
          </div>
          <BagSummary></BagSummary>
          <div class="bag-summary"></div>
        </div>
      </main>
    </>
  );
};

export default Bag;
