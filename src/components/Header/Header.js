import React, {PropTypes} from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Header.css";
import Link from "../Link";
import Navigation from "../Navigation";

function Header(props, context) {
    return (
        <div className={s.root}>
            <div className={s.container}>
                <Navigation className={s.nav}/>
                <Link className={s.brand} to="/">
                    <span className={s.brandTxt}>IConnect</span>
                </Link>
            </div>
        </div>
    );
}

// Header.contextTypes = {store: PropTypes.object.isRequired};

export default withStyles(s)(Header);
