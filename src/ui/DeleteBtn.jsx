import React from "react";
import { useDispatch } from "react-redux";
import {  deleteItem } from "../features/cart/cartSlice";

export default function DeleteBtn({pizzaId}) {
    const dispatch = useDispatch();
    return (

            <button onClick={() => dispatch(deleteItem(pizzaId))} className="cursor-pointer px-[15px] py-[8px] rounded-full bg-yellow-400 text-[12px] font-medium uppercase tracking-wider">
                Delete
            </button>
    );
}
