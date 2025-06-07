// Test ID: IIDSAT
import { useLoaderData } from "react-router";
import { getOrder } from "../../services/apiResturant.";
import OrderItem from "./OrderItem";

export default function Order() {
    const order = useLoaderData();
    const { cart } = order;


    // const {pizzaId, name, quantity, unitPrice, totalPrice} = cart;
    return (
        <div className="p-2">
            <div className="mb-8 flex items-center justify-between p-3">
                <div>
                    <p className="text-xl font-semibold tracking-wide">
                        Order{" "}
                        <span className="font-bold text-stone-500">
                            ${order.id}#
                        </span>{" "}
                        status
                    </p>
                </div>

                <div>
                    <span className="me-5 px-5 py-1 bg-red-600 rounded-full text-white font-semibold text-md tracking-wider">
                        Priority
                    </span>
                    <span className="me-5 px-5 py-1 bg-green-600 rounded-full text-white font-semibold text-md tracking-wider">
                        Preparing order
                    </span>
                </div>
            </div>

            <div className="px-4 py-5 mb-5 rounded-lg bg-stone-200 flex items-center justify-between">
                <p className="text-lg font-semibold">Only 60 minutes left 😃</p>
                <p className="text-[13px] text-stone-500 tracking-wider">
                    (Estimated delivery: Mar 28, 02:05 PM)
                </p>
            </div>

            <div>
                <ul className="divide-y-2 divide-stone-200">
                    {cart.map((pizza) => (
                        <OrderItem key={pizza.pizzaId} pizza={pizza} />
                    ))}
                </ul>
            </div>

            <div className="px-4 py-5 mt-3 rounded-lg bg-stone-200">
                <div>
                    <p className="mb-2 font-semibold">Price pizza: <span className="font-bold">€15.00</span></p>
                </div>
                <div>
                    <p className="mb-2 font-semibold">Price priority: <span className="font-bold">€15.00</span></p>
                </div>
                <div>
                    <p className="mb-2 font-semibold">To pay on delivery: <span className="font-bold">€15.00</span></p>
                </div>
            </div>
        </div>
    );
}

export async function loader({ params }) {
    const order = await getOrder(params.id);
    return order;
}
