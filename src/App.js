import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import Checkout from "./pages/checkout/checkout.component";
import SignInAndSignUp from "./pages/signin-and-signup/signin-and-signup.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from 'react-redux';
import {setCurrentUser} from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCounterUser } from "./redux/user/user.selectors";

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                // the userRef that we get from firebase
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                });
            } else {
                setCurrentUser(userAuth); // null
            }

        });
    }

    componentWillUnmount() {
        // the onAuthStateChanged() function returns the unsubscribe function for the observer.
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route exact path='/checkout' component={Checkout} />
                    <Route exact path='/signIn' render={() =>
                        this.props.currentUser ? (<Redirect to='/'/>) : <SignInAndSignUp/>} />
                </Switch>
            </div>
        );
    }
}

const mapStateProps = createStructuredSelector({
    currentUser: selectCounterUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateProps, mapDispatchToProps)(App);
