import React from "react";
import { useNavigate, useRouteError } from "react-router";

export default function Error() {
    const navigate = useNavigate();
    const error = useRouteError();
    console.log(error)
    return <div>
        <p>Somthing Wrong ❌</p>
        <p>{error.data || error.message}</p>
        <button onClick={() =>navigate(-1)}>&larr; Go Back</button>
    </div>;
}
