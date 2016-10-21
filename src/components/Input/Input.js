import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Formsy from "formsy-react";
import cx from "classnames";
import s from "./Input.css";

const Input = React.createClass({
    mixins: [Formsy.Mixin],
    changeValue(event) {
        this.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value']);
    },
    render() {
        const errorMessage = this.getErrorMessage();
        return (
            <div
                className={cx(s.formGroup, (this.showRequired() ? s.required : ''), (this.showError() ? s.error : ''))}>
                <input
                    className={s.input}
                    placeholder={this.props.placeholder}
                    type={this.props.type || 'text'}
                    name={this.props.name}
                    onChange={this.changeValue}
                    value={this.getValue()}
                    checked={this.props.type === 'checkbox' && this.getValue() ? 'checked' : null}
                />
                <span className={s.validationError}>{errorMessage}</span>
            </div>
        );
    }
});

export default withStyles(s)(Input);
