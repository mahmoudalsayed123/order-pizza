import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [
        // {
        //     pizzaId: 2,
        //     quantity: 4,
        //     name: "Romano",
        //     unitPrice: "23",
        //     totalPrice: 23
        // },
    ]
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            // payload = {item} => push to cart
            state.cart.push(action.payload)
        },
        deleteItem(state, action) {
            //payload = id => item => filter from cart
            state.cart = state.cart.filter((item) => item.pizzaId !== action.payload)
        },
        increaseItem(state, action) {
            // payload += number of quantity
            const item = state.cart.find((item) => item.pizzaId === action.payload);

            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice
        },
        decreaseItem(state,action) {
            // state.cart.quantity -= 1;

            const item = state.cart.find((item) => item.pizzaId === action.payload);

            item.quantity--;
            if(item.quantity === 0 ) cartSlice.caseReducers.deleteItem(state,action);
            item.totalPrice = item.quantity * item.unitePrice
        },
        clearAll(state) {
            state.cart = [];
        }
    }
})

export const { addItem, deleteItem, increaseItem, decreaseItem,clearAll } = cartSlice.actions;

export default cartSlice.reducer;