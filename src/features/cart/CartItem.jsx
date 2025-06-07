import React from "react";
// import { useDispatch } from "react-redux";
// import { deleteItem } from "./cartSlice";
import DeleteBtn from "../../ui/DeleteBtn";
import { useSelector } from "react-redux";

export default function CartItem({ pizza }) {
    const getCurrentQuantity = useSelector(
        (state) =>
            state.cart.cart.find((item) => item.id === pizza.id)?.quantity ?? 0
    );

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

                <div className=" w-[200px] me-2">
                    <DeleteBtn pizzaId={pizza.pizzaId} getCurrentQuantity={getCurrentQuantity}/>
                </div>
            </div>
        </li>
    );
}
