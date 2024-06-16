import {createSlice} from "@reduxjs/toolkit"

const messageSlice = createSlice({
    name: 'messageSlice',
    initialState: {
        message: '',
        counter: 0
    },
    reducers: {
        setMessage: (state, action) => {
            state.message = action.payload;

        },
        resetMessage: (state, action) => {
            state.message = ''

        }
    }
})

// if you are exporting default then while importing it into another file you can call it with any random name instead of calling it just by "messageSlice".
export default messageSlice.reducer;

export const { setMessage, resetMessage } = messageSlice.actions