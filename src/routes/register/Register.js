import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Register.css";
import {requestSignUpDoctorAction} from "../../actions/users/sign-up";
import {navigate} from "../../actions/route";
import {Form} from "formsy-react";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";

const title = 'New User Registration';

class Register extends Component {
    static contextTypes = {
        setTitle: PropTypes.func.isRequired,
        store: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            canSubmit: false
        };
    }

    componentDidMount() {
        this.context.setTitle(title);
        if (this.context.store.getState().hasIn(['entities', 'user', 'name'])) {
            this.props.navigate('/');
        }
    }

    componentWillUnmount() {
    }

    handleFormSubmit(data) {
        this.props.signup(data);
    }

    handleEnableButton() {
        this.setState({canSubmit: true});
    }

    handleDisableButton() {
        this.setState({canSubmit: false});
    }

    render() {
        return (
            <div className={s.root}>
                <div className={s.container}>
                    <div className={s.title}><i className="fa fa-cubes"></i></div>
                    <h1 className={s.title}>Welcome</h1>
                    <Form
                        onSubmit={this.handleFormSubmit.bind(this)}
                        onValid={this.handleEnableButton.bind(this)}
                        onInvalid={this.handleDisableButton.bind(this)}
                    >
                        <Select
                            name="plan"
                            value="free"
                            options={[
                                {value: "free", title: "Plan - Free Tier"},
                            ]}
                        />

                        <Input
                            value=""
                            name="name"
                            placeholder="Name"
                            type="text"
                            required/>

                        <Input
                            value=""
                            name="email"
                            placeholder="Email Address"
                            validations="isEmail"
                            validationError="This is not a valid email"
                            type="text"
                            required/>

                        <Input
                            value=""
                            name="password"
                            placeholder="Password"
                            type="password"
                            required/>

                        <Input
                            value=""
                            name="accountCode"
                            placeholder="Connect Account Code"
                            type="text"
                            required/>

                        <Input
                            value=""
                            name="customerNumber"
                            placeholder="Provider Customer Number"
                            type="text"
                            required/>

                        <div className={s.formGroup}>
                            <button
                                disabled={!this.state.canSubmit}
                                className={s.button}
                                type="submit">
                                {this.props.isFetching ? <i className="fa fa-spinner fa-spin"></i> : null} Register
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {isFetching: state.getIn(['state', 'user', 'isFetching'])};
}

function mapDispatchToProps() {
    return {
        signup: requestSignUpDoctorAction,
        navigate
    };
}

export default connect(mapStateToProps, mapDispatchToProps())(withStyles(s)(Register));
