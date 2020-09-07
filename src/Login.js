import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    // signin logic ...
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((err) => alert("Error: ", err.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          alt="facebook logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
        />
        <img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" />
      </div>

      <Button className="button" type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
