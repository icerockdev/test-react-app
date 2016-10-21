import React, {Component, PropTypes} from "react";
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import {connect} from "react-redux";
import s from "./Navigation.css";
import Link from "../Link";

class Navigation extends Component {
    static contextTypes = {
        setTitle: PropTypes.func.isRequired,
        store: PropTypes.object.isRequired
    };

    static propTypes = {
        className: PropTypes.string,
    };

    render() {
        return (
            this.props.user.get('name') ?
                <div className={cx(s.root, this.props.className)} role="navigation">
                    <Link className={s.link} to="/plans">Plans</Link>
                </div>
                :
                <div className={cx(s.root, this.props.className)} role="navigation">
                    <Link className={s.link} to="/login">Log in</Link>
                    <span className={s.spacer}>or</span>
                    <Link className={cx(s.link, s.highlight)} to="/register">Sign up</Link>
                </div>
        );
    }
}


function mapStateToProps(state) {
    return {user: state.getIn(['entities', 'user'])};
}

export default connect(mapStateToProps, null)(withStyles(s)(Navigation));
