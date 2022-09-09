import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {createField, Input} from '../common/FormControls/FormsControls';
import {required} from '../../utils/validators/validators';
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Navigate} from 'react-router-dom';
import style from '../common/FormControls/FormsControls.module.css';

const LoginForm = ({handleSubmit, error, capthcaUrl}) => {
    return <form onSubmit={handleSubmit}>
        { createField("email", "Email", Input, [required])}
        { createField("password", "Password", Input, [required], {type: "password"} )}
        { createField("rememberMe", [], Input, [required], {type: "checkbox"}, "rememberMe")}

        { capthcaUrl && <img src={capthcaUrl}/>}
        { capthcaUrl && createField("captcha", "Enter symbols from image", Input, [required], {})}

        { error && <div className={style.formSummaryError}>
            {error}
        </div> 
        }
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: "login",
})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if(props.isAuth){
        return <Navigate to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm capthcaUrl={props.captchaUrl} onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    captchaUrl : state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);