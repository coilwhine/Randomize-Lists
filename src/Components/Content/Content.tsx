import { Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import "./Content.scss";
import Create from "./Create/Create";
import Home from "./Home/Home";
import LogIn from "./LogIn/LogIn";
import ListRandomize from "./MyList/List/listRandomize/listRandomize";
import MyList from "./MyList/MyLists";
import Register from "./Register/Register";

function Content(): JSX.Element {
    return (
        <div className="Content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/myLists" element={<MyList />} />
                <Route path="/create" element={<Create />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logIn" element={<LogIn />} />
                <Route path={'/myLists/:listName'} element={<ListRandomize />} />
            </Routes>
        </div>
    );
}

export default Content;
