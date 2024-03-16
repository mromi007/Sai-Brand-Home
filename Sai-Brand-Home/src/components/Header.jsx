import { GoPersonFill } from "react-icons/go";
import { GiHeartBeats } from "react-icons/gi";
import { BsBagHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () =>{
  return(
    <>
    <header>
        <div className="logo_container">
            <Link to="/"><img className="sai_home" src="Sai_Logo.png" alt="Myntra Home"/></Link>
        </div>
        <nav className="nav_bar">
            <a href="#">Shirt</a>
            <a href="#">T-Shirt</a>
            <a href="#">Jeans</a>
            <a href="#">Trouser</a>
            <a href="#">Hoodie</a>
            <a href="#">Jacket</a>
            <a href="#">Kurta's<sup>New</sup></a>
        </nav>
        <div className="action_bar">
            <div className="action_container">
                <GiHeartBeats />
                <span className="action_name">Wishlist</span>
            </div>

            <Link className="action_container" to="/bag">
                <BsBagHeartFill />
                <span className="action_name">Bag</span>
                <span className="bag-item-count">0</span>
            </Link>
            <div className="action_container">
                <GoPersonFill />
                <span className="action_name">Profile</span>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header