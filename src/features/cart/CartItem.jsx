import React from "react";
// import { useDispatch } from "react-redux";
// import { deleteItem } from "./cartSlice";
import DeleteBtn from "../../ui/DeleteBtn";
import {useDispatch, useSelector} from "react-redux";
import {decreaseItem, deleteItem, increaseItem} from "./cartSlice.js";

export default function CartItem({ pizza }) {
    const getCurrentQuantity = useSelector(
        (state) =>
            state.cart.cart.find((item) => item.id === pizza.id)?.quantity ?? 0
    );

    const dispatch = useDispatch();

    return (
        <li className="flex items-center justify-between relative pb-4">
            <div>
                <p className="text-stone-500 text-lg font-medium">
                    {pizza.quantity}x {pizza.name}
                </p>
            </div>

            <div className="flex items-center justify-between">
                <p className="text-stone-600 me-5 font-medium">
                    €{pizza.totalPrice}
                </p>

                <div className="absolute bottom-[10px] right-[10px] w-[200px] flex items-center justify-between me-2">

                    <div className="flex items-center me-5">
                        <button
                            onClick={() => dispatch(decreaseItem(pizza.pizzaId))}
                            className=" flex items-center justify-center pb-2 w-[40px] h-[40px] rounded-full me-3 text-3xl bg-yellow-400 font-medium focus:ring focus:ring-yellow-300 focus:ring-offset-2 cursor-pointer"
                        >
                            -
                        </button>
                        <p className="font-bold">{pizza.quantity}</p>
                        <button
                            onClick={() => dispatch(increaseItem(pizza.pizzaId))}
                            className="flex items-center justify-center pb-2 w-[40px] h-[40px] rounded-full ms-3 text-xl bg-yellow-400 font-medium focus:ring focus:ring-yellow-300 focus:ring-offset-2 cursor-pointer"
                        >
                            +
                        </button>
                    </div>
                    <DeleteBtn pizzaId={pizza.pizzaId}/>
                </div>
            </div>
        </li>
    );
}
