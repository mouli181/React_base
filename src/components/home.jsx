import home from "../images/home.png";
import "../styles/home.css";
import menu from "../images/menu.png"
import { Link } from "react-router-dom";
import Dropdown from "./dropdown";


function Home(){
    return(
        <div>
            <div className="container">
            <div className="ul-nav">
                <Link className="link" to="/login">
                <img src={home} alt="" width="20px" height="20px" />
                Login
                </Link>
                <Link className="link" to="/login">
                <img src={menu} alt="" height={"20px"} width={"20px"} />                
                About
                </Link>
                <Link className="link" to="/signin">
                <img src={home} alt="" width="20px" height="20px" />
                Contact
                </Link>
                <Dropdown />
            </div>
            </div>
        </div>
    );
}
export default Home;