import "./Create.scss";
import { useForm } from 'react-hook-form';

function Create(): JSX.Element {

    const { register, handleSubmit, reset } = useForm();

    function onSubmit(data: any) {
        console.log(data);
        reset()
    }

    return (
        <div className="Create">
            <h1>Create New List</h1>
            <form id="new-list-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="list-name">
                    <label id="new-list-name-label">List Name</label>
                    <input type="text" id="new-list-name" placeholder="Enter list name..." {...register('name')}></input>
                </div>
                <div className="item-adding">
                    <div>
                        <label id="new-list-item-label">Item Name</label>
                        <input type="text" id="new-list-item" placeholder="Enter item name..." {...register('item')}></input>
                    </div>
                    <button type="button"><img src="" alt="plus sign" /></button>
                </div>
            </form>
        </div>
    );
}

export default Create;
