import { useSelector } from "react-redux";
import { AuthState } from "../../app/authSlice";
import "./Header.scss";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import Navigation from "./Navigation/Navigation";

function Header(): JSX.Element {

    return (
        <div className="Header">
            <HeaderLogo />
            <Navigation />
        </div>

    );
}

export default Header;
