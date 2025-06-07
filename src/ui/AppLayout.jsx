import React from "react";
import Header from "./Header";
import CartOverView from "../features/cart/CartOverView";
import Home from "../features/Home";
import { Outlet, useNavigation } from "react-router";
import Loader from "./Loader";
import Loading from "./Loading";

export default function AppLayout() {

    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return (
        <div className="layout grid grid-rows-[auto_1fr_auto] h-screen">
            <Header />

            {isLoading && <Loading /> }
            <main className="bg-stone-100">
                <Outlet />
            </main>

            <CartOverView />
        </div>
    );
}
