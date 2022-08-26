import React from 'react';
import {Navigate} from 'react-router-dom';
import {connect} from 'react-redux';
import {useLocation, useNavigate, useParams} from 'react-router-dom';

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        return (props.isAuth === false) ? <Navigate to="/login" />
        : <Component {...props} />;
    }
    
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)
    (RedirectComponent)

    return ConnectedAuthRedirectComponent;
}

export const withRouter = (Component) => {
    let WithUrlDataContainerComponent = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
        <Component {...props} router={{ location, navigate, params }} />
        );
    }
    return WithUrlDataContainerComponent;
}