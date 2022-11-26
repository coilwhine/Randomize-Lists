import { Link } from "react-router-dom";
import "./HeaderLogo.scss";

function HeaderLogo(): JSX.Element {
    return (
        <div className="HeaderLogo">
            <Link to="/">
                <img src="/assets/Logo.svg" alt="random logo" />
                <span>Randomizer</span>
            </Link>
        </div>
    );
}

export default HeaderLogo;
