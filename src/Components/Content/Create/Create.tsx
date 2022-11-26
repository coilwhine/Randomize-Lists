import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addList } from "../../../app/listsSlice";
import "./Create.scss";
import CreateListItem from "./CreateListItem/CreateListItem";
import CreateListName from "./CreateListName/CreateListName";


function Create(): JSX.Element {
    const minListNameLength = 1;
    const maxListNameLength = 25;
    const minListItemLength = 1;
    const maxListItemLength = 25;
    const minItemInList = 1;

    const [listName, setListName] = useState<string>('');
    const [listItems, setListItems] = useState<string[]>([]);
    const navigate = useNavigate()

    const { lists } = useSelector((state: any) => state?.lists)
    const dispatch = useDispatch()


    function createList() {
        const newList = {
            listName: listName,
            items: listItems
        }

        if (newList.listName.length < minListNameLength) {
            if (newList.items.length < minItemInList) {
                return alert('list nameis too short and there are no items')
            }
            return alert('list name is too short')
        }
        if (newList.items.length < minItemInList) {
            return alert('ther have to be items in list');
        }
        dispatch(addList(newList))
        navigate('/myLists');
    }

    return (
        <div className="Create">
            <div className="heading">
                <h1 className="main-heading">Create New List</h1>
                <p className="secondary-heading">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit similique?</p>
            </div>
            <CreateListName setListName={setListName} listName={listName} minListNameLength={minListNameLength} maxListNameLength={maxListNameLength} />
            <CreateListItem setListItems={setListItems} listItems={listItems} minListItemLength={minListItemLength} maxListItemLength={maxListItemLength} listName={listName} />
            {listName ? <button className="submit-new-list" onClick={createList}>Submit New List</button> : <></>}
        </div >
    );
}

export default Create;
