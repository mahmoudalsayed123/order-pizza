import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { updateUserName } from "./user/userSlice";
export default function Home() {
    // Name must use from redux
    const [name, setName] = useState("");
    const navigate = useNavigate()

    const dispatch = useDispatch();

    function hanleSubmite(e) {
        e.preventDefault();

        if(!name) return;
        dispatch(updateUserName(name));
        navigate('/menu')
    }

    return (
        <div className="mt-[50px] flex flex-col items-center text-center">
            <h2 className="text-4xl font-medium mb-[30px]">
                <span className=" text-stone-600">The best pizza.</span>
                <br />
                <span className="text-yellow-500">
                    Straight out of the oven, straight to you.
                </span>
            </h2>

            <p className="text-stone-500 font-thin text-lg mb-5">
                👋 Welcome! Please start by telling us your name:
            </p>

            <form>
                <input
                    className="mb-5 px-5 py-2 w-[250px] text-stone-500 rounded-full bg-white placeholder:text-stone-400 transition-all duration-300 focus:outline-0 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 "
                    type="text"
                    placeholder="Your Full Name"
                    onChange={(e) => setName(e.target.value)}
                />
            </form>

            {name !== "" && (
                <Link
                    onClick={hanleSubmite}
                    to="/menu"
                    className="px-[40px] py-[15px] rounded-full bg-yellow-400  hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-3"
                >
                    Start Ordering
                </Link>
            )}
        </div>
    );
}
