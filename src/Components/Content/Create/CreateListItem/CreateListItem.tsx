import "./CreateListItem.scss";
import { useForm } from "react-hook-form";

function CreateListItem({ setListItems, listItems, minListItemLength, listName, maxListItemLength }: any): JSX.Element {

    const { register, handleSubmit, reset } = useForm();

    function onSubmit(data: any) {
        if (data.itemName.length < minListItemLength) {
            alert('Item name is too short');
            reset();
        } else {
            for (let item of listItems) {
                if (item === data.itemName) {
                    alert('item name is taken')
                    return
                }
            }
            let list = [...listItems];
            list.push(data.itemName);
            setListItems(list);
            reset();
        }
    }

    return (
        <div className="CreateListItem">
            {listName &&
                <form className="new-list-form" onSubmit={handleSubmit(onSubmit)}>
                    <label id="new-list-name-label">Item Name</label>
                    <input disabled={!listName} type="text" id="new-list-name" minLength={minListItemLength} maxLength={maxListItemLength} placeholder="Enter list name..." {...register('itemName')} />
                    <button disabled={!listName}>Add<img src="./assets/plus.svg" alt="plus sign" /></button>
                </form >
            }
        </div>
    );
}

export default CreateListItem;
