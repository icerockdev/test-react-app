import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./HomeSignUpButton.css";
import Link from "../Link";

function HomeSignUpButton() {
    return (
        <div className={s.signUpLinkWrap}>
            <Link className={s.signUpLink} to="/register">Sign Up for FREE now!</Link>
        </div>
    );
}

export default withStyles(s)(HomeSignUpButton);
