import React from "react";

export default function OrderItem({ pizza }) {
    return (
        <li className="flex items-center justify-between relative pb-3 pt-3">
            <div>
                <p className="text-stone-500 text-lg font-medium">
                    {pizza.quantity}x {pizza.name}
                </p>
            </div>

            <div className="flex items-center">
                <p className="text-stone-700 me-5 font-bold">€15.00</p>
            </div>
        </li>
    );
}
