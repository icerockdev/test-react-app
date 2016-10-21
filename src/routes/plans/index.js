import React from "react";
import Plans from "./Plans";

const title = 'Plans';

export default {

    path: '/plans',

    action() {
        return <Plans/>;
    },
};
