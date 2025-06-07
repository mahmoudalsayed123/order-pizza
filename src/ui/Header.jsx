import React from "react";
import { Link } from "react-router";
import SearchOrder from "./SearchOrder";
import { useSelector } from "react-redux";

export default function Header() {
    const userName = useSelector((state) => state.user.userName)
    return (
        <header className="p-4 sm:p-5  bg-yellow-400 flex items-center justify-between">
            <div>
                <Link className="text-lg sm:text-xl" to="/">
                    Fast React Pizza Co.
                </Link>
            </div>
            <div>
                <SearchOrder />
            </div>
            <p className="hidden md:block font-semibold">{userName}</p>
        </header>
    );
}
