import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Formsy from "formsy-react";
import cx from "classnames";
import s from "./Select.css";

const Select = React.createClass({
    mixins: [Formsy.Mixin],
    changeValue(event) {
        this.setValue(event.currentTarget.value);
    },
    render() {
        const errorMessage = this.getErrorMessage();
        const options = this.props.options.map((option, i) => (
            <option key={option.title + option.value} value={option.value}>
                {option.title}
            </option>
        ));

        return (
            <div
                className={cx(s.formGroup, (this.showRequired() ? s.required : ''), (this.showError() ? s.error : ''))}>
                <select
                    className={s.input}
                    name={this.props.name}
                    onChange={this.changeValue}
                    value={this.getValue()}>
                    {options}
                </select>
                <span className={s.validationError}>{errorMessage}</span>
            </div>
        );
    }
});

export default withStyles(s)(Select);
