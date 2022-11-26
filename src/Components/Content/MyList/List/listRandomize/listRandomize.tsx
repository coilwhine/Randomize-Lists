import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { randomizing, removeItem } from "../../../../../app/listsSlice";
import { ListModel } from "../../../../../Models/listModel";
import "./listRandomize.scss";

function ListRandomize(): JSX.Element {

    const { listName } = useParams()
    const { lists } = useSelector((state: any) => state?.lists)
    const dispatch = useDispatch();
    const [list]: [list: ListModel] = lists.filter((res: ListModel) => {
        return res.listName === listName;
    })
    let itemsOrder = list.items
    const [randomizedTime, setRandomizedTime] = useState<string>('Never')

    function delleteItem(e: any) {
        const item = e.target.dataset.item;
        const sending = { item: item, list: list };
        dispatch(removeItem(sending));
    }

    function randomize(array: string[]) {
        let index = 0;
        let item = '';
        let oldArray = [...array];
        let newArray = [];

        for (let x = 0; x < array.length; x++) {
            index = Math.floor(Math.random() * oldArray.length);
            item = oldArray[index];
            oldArray.splice(index, 1)
            newArray.push(item)
        }
        const sending = { newArray: newArray, list: list }
        dispatch(randomizing(sending));

        const date = new Date();

        let day = date.getUTCDate().toString();
        if (day.length < 2) {
            day = '0' + day
        }

        let month = (date.getUTCMonth() + 1).toString();
        if (month.length < 2) {
            month = '0' + month
        }

        let hours = date.getHours().toString();
        if (hours.length < 2) {
            hours = '0' + hours
        }
        let minutes = date.getMinutes().toString();
        if (minutes.length < 2) {
            minutes = '0' + minutes
        }
        let seconnds = date.getSeconds().toString();
        if (seconnds.length < 2) {
            seconnds = '0' + seconnds
        }

        setRandomizedTime(`${day}.${month} / ${hours}:${minutes}:${seconnds}`)
    }

    return (
        <div className="listRandomize">
            <header>
                <h1>{listName}</h1>
                <Link className="go-back-btn" to={"/myLists"}>Back</Link>
            </header>
            <span>Latest randomized at: <span className="time-indicator">{randomizedTime}</span></span>
            <div className="items-wraper">
                {list.items.map((item) => {
                    return (
                        <span className="item" key={`${item}`}>
                            {item}
                            <button className="del-btn" data-item={item} onClick={(e) => delleteItem(e)}><img src="/assets/trash.svg" alt="dellete btn" data-item={item}></img></button>
                        </span>
                    )
                })}
            </div>
            <button onClick={() => randomize(itemsOrder)}>Randomize!</button>
        </div>
    );
}

export default ListRandomize;
