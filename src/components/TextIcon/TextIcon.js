import React, {Component, PropTypes} from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cx from "classnames";
import s from "./TextIcon.css";

class TextIcon extends Component {
    static propTypes = {
        icon: PropTypes.string.isRequired,
    };

    render() {
        return (
            <div className="col-xs">
                <div className={cx(s.boxRow, 'box-row')}>
                    <p className={s.iconFontWrap}>
                        <i className={cx(this.props.icon, 'fa')} aria-hidden="true"></i>
                    </p>
                    <p className={s.textWrap}>
                        A paragraph of text with a <a
                        className={s.textWrapLink}
                        href="javascript: void(0)">link</a>.<br/>A <i>second</i> <b>row</b> of text.
                    </p>
                </div>
            </div>
        );
    }
}

export default withStyles(s)(TextIcon);
