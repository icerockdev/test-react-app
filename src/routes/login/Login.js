import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import {requestSignInDoctorAction} from "../../actions/users/sign-in";
import {navigate} from "../../actions/route";
import s from "./Login.css";
import {Form} from "formsy-react";
import Input from "../../components/Input/Input";

const title = 'Log In';

class Login extends Component {
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
        this.props.signin(data);
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
                    <h1 className={s.title}>Welcome Back!</h1>
                    <Form
                        onSubmit={this.handleFormSubmit.bind(this)}
                        onValid={this.handleEnableButton.bind(this)}
                        onInvalid={this.handleDisableButton.bind(this)}
                    >
                        <Input
                            value=""
                            name="email"
                            placeholder="Email address"
                            validations="isEmail"
                            validationError="This is not a valid email"
                            required/>
                        <Input
                            value=""
                            name="password"
                            placeholder="Password"
                            type="password"
                            required/>

                        <div className={s.formGroup}>
                            <button
                                disabled={!this.state.canSubmit}
                                className={s.button}
                                type="submit">
                                {this.props.isFetching ? <i className="fa fa-spinner fa-spin"></i> : null} Login
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
        signin: requestSignInDoctorAction,
        navigate
    };
}

export default connect(mapStateToProps, mapDispatchToProps())(withStyles(s)(Login));
