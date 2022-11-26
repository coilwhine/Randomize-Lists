import { useSelector } from "react-redux";
import { ListModel } from "../../../Models/listModel";
import List from "./List/List";
import "./MyLists.scss";

function MyLists(): JSX.Element {

    const { lists } = useSelector((state: any) => state?.lists)

    return (
        <div className="MyLists">
            <h1>My Lists</h1>
            <div className="lists-wraper">
                {lists.map((list: ListModel) => {
                    return <List key={list.listName} list={list} />
                })}
            </div>
        </div>
    );
}

export default MyLists;
