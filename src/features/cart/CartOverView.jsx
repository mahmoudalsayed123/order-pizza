import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function CartOverView() {

    const NumOfPizzas = useSelector((state) => state.cart.cart.reduce((sum,cur) => {
        // console.log(cur.quantity)
        return sum + cur.quantity
    },0))

    const totalPriceOfPizzas = useSelector((state) => state.cart.cart.reduce((sum,cur) => {
        return sum + cur.totalPrice
    },0))

    if(!NumOfPizzas) return;

    return (
        <div className="w-full h-[70px] bg-stone-800 fixed bottom-0 text-stone-200 flex items-center justify-between" >
            <div className="flex items-center ms-4 text-[17px] tracking-wider font-medium uppercase">
                <p className="me-5">
                    <span>{NumOfPizzas}</span> Pizzas
                </p>

                <p>€{totalPriceOfPizzas}</p>
            </div>

            <div className="me-5 cursor-pointer">
                <Link to="/cart" className="uppercase">Open Cart <span className="ms-1">→</span></Link>
            </div>
        </div>
    );
}
