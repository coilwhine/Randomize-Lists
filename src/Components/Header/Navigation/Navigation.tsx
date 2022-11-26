import "./Navigation.scss";
import { NavLink } from "react-router-dom";

function Navigation(): JSX.Element {
    return (
        <div className="Navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/create">Create</NavLink>
            <NavLink to="/myLists">My Lists</NavLink>
            <NavLink to="/aboutUs">About Us</NavLink>
        </div>
    );
}

export default Navigation;
