import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../cart/cartSlice";
import DeleteBtn from "../../ui/DeleteBtn";

export default function MenuItem({ pizza }) {
    const getCurrentQuantity = useSelector(
        (state) =>
            state.cart.cart.find((item) => item.pizzaId === pizza.id)?.quantity ?? 0
    );
    const isInCart = getCurrentQuantity > 0;

    const { id: pizzaId, unitPrice, name } = pizza;
    pizza.quantity = 1
    pizza.totalPrice = unitPrice * 1;
    const dispatch = useDispatch();

    function handleItem() {
        const newItem = {
            pizzaId,
            name,
            quantity: pizza.quantity,
            unitPrice,
            totalPrice: pizza.totalPrice,
        };

        dispatch(addItem(newItem));
        console.log(newItem)
    }

    return (
        <li className="ms-3 mt-3 flex items-center py-2 relative">
            <div>
                <img className="w-[100px] me-5" src={pizza.imageUrl} alt="" />
            </div>

            <div>
                <p className="font-bold text-stone-700 mb-1">{pizza.name}</p>
                <ul className="flex items-center mb-5">
                    {pizza.ingredients.map((ing, i) => (
                        <li
                            className="text-sm text-stone-500 me-2 uppercase italic"
                            key={i}
                        >
                            {ing},
                        </li>
                    ))}
                </ul>
                <p className="text-stone-700">€{pizza.unitPrice}.00</p>
            </div>

            {isInCart && (
                <DeleteBtn pizzaId={pizza.id} getCurrentQuantity={getCurrentQuantity} />
            )}

            {!isInCart && (
                <button
                    to="/menu"
                    onClick={() => {
                        handleItem();
                        // handleAdd();
                    }}
                    className="cursor-pointer px-[15px] py-[8px] rounded-full bg-yellow-400 text-[12px] font-medium uppercase absolute bottom-[10px] right-[10px] tracking-wider  hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-3"
                >
                    Add To Cart
                </button>
            )}
        </li>
    );
}
