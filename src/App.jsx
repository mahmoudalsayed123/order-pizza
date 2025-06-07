import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./features/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import AppLayout from "./ui/AppLayout";
import Order, { loader as orderLoader } from "./features/order/Order";
import CreateOrder, {action as CreateNewOrder} from "./features/order/CreateOrder";
import Error from "./ui/Error";

const routes = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/menu",
                element: <Menu />,
                loader: menuLoader,
                errorElement: <Error />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/order/new",
                element: <CreateOrder />,
                action: CreateNewOrder
            },
            {
                path: "/order/:id",
                element: <Order />,
                loader: orderLoader,
                errorElement: <Error />
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={routes} />;
}

export default App;
