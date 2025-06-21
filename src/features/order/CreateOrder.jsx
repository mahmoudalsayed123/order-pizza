import {
    Form,
    NavLink,
    redirect,
    useActionData,
    useNavigation,
} from "react-router";
import { createOrder } from "../../services/apiResturant.";
import { useSelector } from "react-redux";
import store from '../../store'
import {clearAll} from '../cart/cartSlice'

const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        str
    );

const fakeCart = [
    {
        pizzaId: 2,
        name: "Napoli",
        customer: "JONas",
        phone: 345435,
        quantity: 3,
        unitPrice: 16,
        totalPrice: 48,
    },
    {
        name: "Diavola",
        pizzaId: 3,
        customer: "JONas",
        phone: 345435,
        quantity: 2,
        unitPrice: 16,
        totalPrice: 32,
    },
    {
        name: "Romana",
        pizzaId: 4,
        customer: "JONas",
        phone: 345435,
        quantity: 1,
        unitPrice: 15,
        totalPrice: 15,
    },
];

export default function CreateOrder() {
    const navigation = useNavigation();
    const isSumbitting = navigation.state === "submitting";
    const userName = useSelector((state) => state.user.userName);

    const formError = useActionData();
    // const cart = useSelector((state) => state.cart.cart);
    const cart = useSelector((state) => state.cart.cart);

    const totalPriceOfPizzas = useSelector((state) =>
        state.cart.cart.reduce((sum, cur) => {
            return sum + cur.totalPrice;
        }, 0)
    );

    if (cart.length < 0) return <p>Cart Is Empty</p>;

    return (
        <div className="px-4 py-5">
            <h2 className="text-2xl font-semibold mb-8 text-stone-500">
                Ready to order? Let's go!
            </h2>

            <Form method="POST">
                <div className="flex flex-col gap-2 mb-5 sm:flex-row sm:items-center">
                    <label
                        className="sm:basis-40 text-stone-600 text-lg"
                        htmlFor="name"
                    >
                        First Name
                    </label>
                    <input
                        required
                        className="input grow bg-white font-bold"
                        type="text"
                        id="name"
                        name="customer"
                        defaultValue={userName}
                    />
                </div>
                <div className="flex flex-col gap-2 mb-5 sm:flex-row sm:items-center">
                    <label
                        className="sm:basis-40 text-stone-600 text-lg"
                        htmlFor="phone"
                    >
                        Phone Number
                    </label>
                    <input
                        required
                        className="input grow bg-white"
                        type="tel"
                        id="phone"
                        name="phone"
                    />
                </div>
                {formError && <p> {formError}</p>}
                <div className="flex flex-col gap-2 mb-5 sm:flex-row sm:items-center">
                    <label
                        className="sm:basis-40 text-stone-600 text-lg"
                        htmlFor="address"
                    >
                        Address
                    </label>
                    <input
                        required
                        className="input grow bg-white"
                        type="text"
                        id="address"
                        name="address"
                    />
                </div>
                <div className="mb-5 flex items-center">
                    <input
                        required
                        className="input me-4 w-[20px] h-[20px] accent-yellow-400"
                        type="checkbox"
                        id="priority"
                        name="priority"
                    />
                    <label
                        className="text-lg text-stone-600"
                        htmlFor="priority"
                    >
                        Want to yo give your order priority?
                    </label>
                </div>
                <input type="hidden" name="cart" value={JSON.stringify(cart)} />
                <button
                    // to={`order/${}`}
                    disabled={isSumbitting}
                    className=" px-4 py-3 bg-yellow-400 rounded-full cursor-pointer text-lg font-semibold transition-all duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-3"
                >
                    {isSumbitting ? (
                        "Placing Order..."
                    ) : (
                        <span>
                            {" "}
                            Order Now From{" "}
                            <span className="font-bold">
                                ${totalPriceOfPizzas}
                            </span>
                        </span>
                    )}
                </button>
            </Form>
        </div>
    );
}

export async function action({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const order = {
        ...data,
        cart: JSON.parse(data.cart),
        priority: data.priority === "on",
    };

    const error = {};

    if (!isValidPhone(order.phone))
        return (error.phone =
            "Please Us your correct phone number. We might need it to contact you.");

    if (Object.keys(error).length > 0) return error;

    const newOrder = await createOrder(order);
    

    store.dispatch(clearAll());

    return redirect(`/order/${newOrder.id}`);
    // return null;
}
