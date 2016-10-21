import React, {Component, PropTypes} from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cx from "classnames";
import s from "./Circle.css";

class Circle extends Component {
    static propTypes = {
        className: PropTypes.string.isRequired,
    };

    render() {
        return (
            <div className={cx(s.circle, this.props.className)}></div>
        );
    }
}

export default withStyles(s)(Circle);
