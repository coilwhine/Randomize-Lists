import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ListModel } from '../Models/listModel'

interface ListSlice {
    lists: ListModel[]
}

export const listsSlice = createSlice({
    name: 'lists',
    initialState: {
        lists: [
            { listName: "Names", items: ["Daniel", "Segev", "Yuval"] },
            { listName: "Ages", items: ["32", "28", "21"] }
        ]
    } as ListSlice,
    reducers: {

        setAllLists: (state, action: PayloadAction<ListModel[]>) => {
            if (action.payload) {
                state.lists = action.payload;
            }
        },

        addList: (state, action: PayloadAction<ListModel>) => {
            state.lists.push(action.payload)

            window.localStorage.setItem('lists', JSON.stringify(state.lists))
        },

        removeList: (state, action: PayloadAction<string>) => {

            state.lists = state.lists.filter((list) => {
                return list.listName !== action.payload;
            })

            window.localStorage.setItem('lists', JSON.stringify(state.lists))

        },

        removeItem: (state, action: PayloadAction<any>) => {

            const list: any = state.lists.filter((res) => {
                return action.payload.list.listName === res.listName;
            })

            const otherLists: any = state.lists.filter((res) => {
                return action.payload.list.listName !== res.listName;
            })

            const newItemsList = list[0].items.filter((res: any) => {
                return res !== action.payload.item;
            })

            list[0].items = newItemsList

            otherLists.push(list)

            window.localStorage.setItem('lists', JSON.stringify(state.lists))

        },

        randomizing: (state, action: PayloadAction<any>) => {

            const list: any = state.lists.filter((res) => {
                return action.payload.list.listName === res.listName;
            })

            const otherLists: any = state.lists.filter((res) => {
                return action.payload.list.listName !== res.listName;
            })

            list[0].items = action.payload.newArray;

            otherLists.push(list)

            window.localStorage.setItem('lists', JSON.stringify(state.lists))

        }
    }
})

export const { setAllLists, addList, removeList, removeItem, randomizing } = listsSlice.actions;
export default listsSlice.reducer;