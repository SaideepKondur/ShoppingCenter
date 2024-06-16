import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            // cartItem returns an 'item' which has itemId = action
            const cartItem = state.cart.find(item =>item.id == action.payload)
            if(cartItem){
                cartItem.quantity += 1; 
                return;
            }
            state.cart.push({
                quantity:1,
                id: action.payload
            })
        },
        removeFromCart: (state, action) => {
            const cartItem = state.cart.find(item =>item.id == action.payload)
            if(cartItem) {
                cartItem.quantity -= 1;
                if(cartItem == 0) {
                    state.cart = state.cart.filter(item => item.id != action.payload)

                }
            }
            
        }

    }
})


export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;
//structure
// {
//     quantity:12
//     id:12 
// }
// if you are exporting default then while importing it into another file you can call it with any random name instead of calling it just by "messageSlice".

