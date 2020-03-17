import React from "react";
import './signin-and-signup.style.scss';
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sogn-up.component";

const SignInAndSignUp = () => (
    <div className='sign-in-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUp;
