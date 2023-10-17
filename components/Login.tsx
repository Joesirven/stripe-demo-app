import React, { ReactElement } from "react";
import firebase from "../firebase/firebaseClient"

interface Props {}

function Login({}: Props): ReactElement {
    async function signInWithGithub() {
        return await firebase
            .auth()
            .signInWithPopup(new firebase.auth.GithubAuthProvider());
}

    return (
        <div>
            <button onClick={() => signInWithGithub()}>Sign in with GitHub</button>
        </div>
    );
};

export default Login;
