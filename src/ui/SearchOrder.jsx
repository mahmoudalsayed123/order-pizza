import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function SearchOrder() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function handleSumbite(e) {
        e.preventDefault();
        if (!query) return;
        navigate(`/order/${query}`);
        setQuery("");
    }

    return (
        <form onSubmit={handleSumbite}>
            <input
                className="px-5 py-2 w-[250px] rounded-full bg-yellow-100 placeholder:text-stone-400 transition-all duration-300 focus:outline-0 focus:w-[300px] focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 "
                type="text"
                placeholder="Search Order #"
                name="Order"
                onChange={(e) => setQuery(e.target.value)}
            />
        </form>
    );
}
