import React from "react";
import { useLoaderData } from "react-router";
import MenuItem from "./MenuItem";
import { getMenu } from "../../services/apiResturant.";

export default function Menu() {
    const menu = useLoaderData();
    return (
        <ul className="divide-y divide-stone-200">
            {menu.map((pizza) => (
                <MenuItem key={pizza.id} pizza={pizza} />
            ))}
        </ul>
    );
}

export async function loader() {
    const menu = await getMenu();
    return menu;
}
