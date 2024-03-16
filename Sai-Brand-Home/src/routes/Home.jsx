import HomeItem from "../components/HomeItem";
import Founder from "../components/founder";
import Brand from "../components/Brand";
import {useSelector} from "react-redux";

const Home = () => {

  const items = useSelector(store => store.items)


  return (
    <>
      <main>
      <Brand></Brand>
        <div className="items-container">
          {items.map(items =>
            <HomeItem key={items.id} item={items}/>)}
        </div>
        <Founder></Founder>
      </main>
      ;
    </>
  );
};

export default Home;
