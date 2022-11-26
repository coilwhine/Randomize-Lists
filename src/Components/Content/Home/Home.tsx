import { Link } from "react-router-dom";
import "./Home.scss";

function Home(): JSX.Element {
    return (
        <div className="Home">
            <div className="heading">
                <h1 className="main-heading">Randomaizer</h1>
                <p className="secondary-heading">Your free solution for randomizing.<br /> yes, finally you can have one tool to adress all your randomizing frustration and its free!</p>
            </div>

            <div className="home-menu">
                <Link className="big-btn create-big-btn" to="/create">
                    <h2>Create New List</h2>
                </Link>
                <Link className="big-btn lists-big-btn" to="/myLists">
                    <h2>Your Lists</h2>
                </Link>
            </div>

            <div className="diractions">
                <h2>First time here?</h2>
                <p>Take those steps to start your random journey</p>
                <ol>
                    <li><span>1</span>Create new list</li>
                    <li><span>2</span>Enter you list name</li>
                    <li><span>3</span>Name your list items</li>
                    <li><span>4</span>Press the randomizer</li>
                </ol>
            </div>
        </div>
    );
}

export default Home;
