import React from "react";
import App from "../components/App";
import home from "./home";
import plans from "./plans";
import login from "./login";
import register from "./register";
import content from "./content";
import error from "./error";

// Child routes

export default {

    path: '/',

    // keep in mind, routes are evaluated in order
    children: [
        home,
        plans,
        login,
        register,

        // place new routes before...
        content,
        error,
    ],

    async action({next, render, context}) {
        const component = await next();
        if (component === undefined) return component;
        return render(
            <App context={context}>{component}</App>
        );
    },
};
