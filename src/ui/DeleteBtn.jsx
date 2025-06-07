import React from "react";
import { useDispatch } from "react-redux";
import { decreaseItem, deleteItem, increaseItem } from "../features/cart/cartSlice";

export default function DeleteBtn({pizzaId,getCurrentQuantity}) {
    const dispatch = useDispatch();
    return (
        <div className="absolute bottom-[10px] right-[10px] w-[200px] flex items-center justify-between me-2">
            <div className="flex items-center me-5">
                <button
                    onClick={() => dispatch(decreaseItem(pizzaId))}
                    className=" flex items-center justify-center pb-2 w-[40px] h-[40px] rounded-full me-3 text-3xl bg-yellow-400 font-medium focus:ring focus:ring-yellow-300 focus:ring-offset-2 cursor-pointer"
                >
                    -
                </button>
                <p className="font-bold">{getCurrentQuantity}</p>
                <button
                    onClick={() => dispatch(increaseItem(pizzaId))}
                    className="flex items-center justify-center pb-2 w-[40px] h-[40px] rounded-full ms-3 text-xl bg-yellow-400 font-medium focus:ring focus:ring-yellow-300 focus:ring-offset-2 cursor-pointer"
                >
                    +
                </button>
            </div>

            <button onClick={() => dispatch(deleteItem(pizzaId))} className="cursor-pointer px-[15px] py-[8px] rounded-full bg-yellow-400 text-[12px] font-medium uppercase tracking-wider">
                Delete
            </button>
        </div>
    );
}
