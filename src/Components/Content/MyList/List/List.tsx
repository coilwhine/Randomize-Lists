import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeList } from "../../../../app/listsSlice";
import { ListModel } from "../../../../Models/listModel";
import "./List.scss";

function List({ list }: { list: ListModel }): JSX.Element {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    function delleteItem(e: any) {

        dispatch(removeList(list.listName))
    }

    function navigation(e: any) {

        if (e.target.localName !== 'span') {
            return
        }
        navigate(`/myLists/${list.listName}`)
    }

    return (
        <div className="List">
            <span onClick={(e) => navigation(e)}>
                {list.listName}
                <button className="del-btn" onClick={(e) => delleteItem(e)}>
                    <img src="/assets/trash.svg" alt="dellete btn"></img>
                </button>
            </span>
        </div>
    );
}

export default List;
