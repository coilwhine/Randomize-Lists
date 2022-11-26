import { Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import "./Content.scss";
import Create from "./Create/Create";
import Home from "./Home/Home";
import MyList from "./MyList/MyList";

function Content(): JSX.Element {
    return (
        <div className="Content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/myLists" element={<MyList />} />
                <Route path="/create" element={<Create />} />
                <Route path="/aboutUs" element={<AboutUs />} />
            </Routes>
        </div>
    );
}

export default Content;
