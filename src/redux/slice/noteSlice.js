import { createSlice, nanoid } from "@reduxjs/toolkit";
const setItem = (state) => {
    localStorage.setItem('notes', [JSON.stringify(state.notes)])
}
export const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : localStorage.setItem('notes', JSON.stringify([])) || [],
        isLoading: false,
        error: null,
        filteredText: '',
        singleNote: [],
        choosenColor: "all"
    },
    reducers: {
        addText: {
            reducer: (state, action) => {
                console.log(action)
                state.notes.unshift(action.payload)
                setItem(state)
            }, prepare: ({ note, title, color }) => {
                const id = nanoid();
                return { payload: { id, note, title, color } }
            },

        },
        searchFilter: (state, action) => {
            state.filteredText = action.payload
        },
        deleteText: (state, action) => {
            const { id } = action.payload
            const filtered = state.notes.filter(item => item.id !== id)
            state.notes = filtered;
            setItem(state)
        },
        getSingleNote: (state, action) => {
            const { id } = action.payload
            const findNote = state.notes.find(item => item.id === id)
            state.singleNote = [findNote]
        },
        giveUpToEdit: (state) => {
            state.singleNote = []
        },
        editNote: (state, action) => {
            const { id, note, title, color } = action.payload
            state.notes = state.notes.map(item => item.id === id ? { id, note, title, color } : item)
            setItem(state)
            giveUpToEdit()
        },
        setColorChoose: (state, action) => {
            state.choosenColor = action.payload
        }
    }
})

export const noteSelector = state => state.notes
export const fiteredNote = state => {
    return state.notes.notes.filter(item => item.title.toLowerCase().includes(state.notes.filteredText.toLowerCase()))
        .filter(item => state.notes.choosenColor === "all" ? item : item.color === state.notes.choosenColor)
}

export const { addText, searchFilter, deleteText, getSingleNote, giveUpToEdit, editNote, setColorChoose } = noteSlice.actions

export default noteSlice.reducer