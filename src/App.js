import React, { Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import {withRouter} from "./hoc/withAuthRedirect";
import { compose } from "redux";
import { connect } from "react-redux";
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/preloader/Preloader';
import {Provider} from 'react-redux';
import store from './redux/redux-store';
const ProfileContainer = React.lazy(() => import ('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'));



class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render(){

    if(!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <React.Suspense fallback = {<Preloader />}>
            <Routes>
                <Route path="/dialogs/*" element={<DialogsContainer />} />
                <Route path="/profile/:userId" element={<ProfileContainer />} />
                <Route path="/profile/" element={<ProfileContainer />} />
                <Route path="/users" element={<UsersContainer/>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/news" element={<News/>} />
                <Route path="/music" element={<Music/>} />
                <Route path="/settings" element={<Settings/>} />
            </Routes>
          </React.Suspense>
        </div> 
      </div>
  );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))
  (App);

  const SamuraiJSApp = (props) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter> 
  }

  export default SamuraiJSApp;