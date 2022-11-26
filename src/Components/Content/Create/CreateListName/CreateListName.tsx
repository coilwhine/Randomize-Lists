import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { ListModel } from "../../../../Models/listModel";
import "./CreateListName.scss";

function CreateListName({ setListName, listName, minListNameLength, maxListNameLength }: any): JSX.Element {

    const { register, handleSubmit } = useForm();
    const { lists } = useSelector((state: any) => state?.lists)


    function onSubmit(data: any) {
        if (data.listName < minListNameLength) {
            alert('List name is too short')
        } else {
            for (let list of lists as ListModel[]) {
                if (list.listName === data.listName) {
                    alert('List name is taken')
                    return
                }
            }
            setListName(data.listName);
        }
    }

    return (
        <div className="CreateListName">
            {listName.length < minListNameLength ?
                <form className="new-list-form" onSubmit={handleSubmit(onSubmit)}>
                    <label id="new-list-name-label">List Name</label>
                    <input type="text" id="new-list-name" minLength={minListNameLength} maxLength={maxListNameLength} placeholder="Enter list name..." {...register('listName')} />
                    <button>Add<img src="./assets/plus.svg" alt="plus sign" /></button>
                    <div>{listName}</div>
                </form >
                :
                <div className="new-list-form submited">
                    <label>{listName}</label>
                </div >}
        </div>
    );
}

export default CreateListName;
