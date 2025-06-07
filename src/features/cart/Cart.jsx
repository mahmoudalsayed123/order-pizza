import React from "react";
import { Link } from "react-router";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import {clearAll} from '../cart/cartSlice'

export default function Cart() {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();;
    
    return (
        <div className="p-3">
            <Link to="/menu" className="text-blue-500 block mb-[30px]">
                ← Back to menu
            </Link>

            <h3 className="text-stone-600 font-medium text-xl mb-5">
                Your Cart, Mahmoud
            </h3>

            <ul className="divide-y divide-stone-200 mb-[30px]">
                {cart.map((pizza) => <CartItem key={pizza.pizzaId} pizza={pizza} />)}
            </ul>

            <Link
                to="/order/new"
                className=" mt-5 px-[30px] py-[15px] rounded-full bg-yellow-400 uppercase text-sm font-medium transition-all duration-30 cursor-pointer  hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-3"
            >
                Order Pizzas
            </Link>

            <button
                onClick={() => dispatch(clearAll())}
                to="/menu"
                className="inline-block ms-4 mt-5 px-[30px] py-[15px] rounded-full bg-transparent border-1 border-stone-400 uppercase text-sm text-stone-300 font-bold transition-all duration-300 hover:bg-stone-300 hover:text-white cursor-pointer"
            >
                Clear Cart
            </button>

            {/* When Clear Cart */}
            {/* <p className="text-stone-700 font-medium">Your cart is still empty. Start adding some pizzas :)</p> */}
        </div>
    );
}
