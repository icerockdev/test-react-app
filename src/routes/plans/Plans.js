import React, {PropTypes} from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Plans.css";

const title = 'Plans';

function Plans(props, context) {
    context.setTitle(title);
    return (
        <div className={s.root}>
            <div className={s.container}>
                <h1>{title}</h1>
                <p>...</p>
            </div>
        </div>
    );
}

Plans.contextTypes = {setTitle: PropTypes.func.isRequired};

export default withStyles(s)(Plans);
