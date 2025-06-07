import React from "react";
import Loader from "./Loader";

export default function Loading() {
    return (
        <div className=" w-full h-[100vh] absolute bg-white opacity-[0.5] flex items-center justify-center">
            <Loader />
        </div>
    );
}
