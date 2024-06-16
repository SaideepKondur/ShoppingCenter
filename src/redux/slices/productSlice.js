import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

  export const fetchData = createAsyncThunk('products/fetch', async () => {
    // https://api.escuelajs.co/api/v1/products
    // https://fakestoreapi.in/api/products
    // https://fakestoreapi.com/products
    const response = await fetch('https://fakestoreapi.in/api/products');
    const data = await response.json();
    console.log(data); // Log the API response for debugging
    return data.products;
  });
 
const productSlice = createSlice({
    name: 'productSlice',
    initialState:{
        products: [],
        //Thunk sends the status to the reducer which is shown below, and in case there is an error it also provides an error message.
        status: 'idle', //idle, loading, success, failed
        error: null,
    },

    //No need for reducer here, since we are directly doing in 'extraReducer.
    // reducers:{
    //     loadProducts: (state, action) => {
    //         state.products = action.payload;
    //     },
    // },

    //Whenever we use createAsyncThunk in our middleware, it will dispatch these three actions below
    extraReducers: function(builder){
        builder
        .addCase(fetchData.pending, (state, action) => {
            state.status = 'loading';

        })
        .addCase(fetchData.fulfilled, (state, action) => {
            state.products = action.payload;
            state.status = 'success';

        })
        .addCase(fetchData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;

        }) 

    },

});

export default productSlice.reducer;
// export const {loadProducts} = productSlice.actions;

