import { useRef, useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import AlertsBanner from "./shared/AlertsBanner";

const Auth = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [errorMsg, setErrorMsg] = useState();

  const login = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        emailInputRef.current.value,
        passwordInputRef.current.value
      );
    } catch (err) {
      setErrorMsg(err.message);
      console.log(err.message);
    }
  };

  return (
    <div className="row justify-content-center login-form">
      <div className="col-lg-6">
        <h2>Log In</h2>
        {errorMsg && <AlertsBanner msg={errorMsg} type={"danger"} />}
        <form className="mt-5" onSubmit={login}>
          <div className="form-group">
            <label htmlFor="inputEmail">Email address</label>
            <input
              ref={emailInputRef}
              name="inputEmail"
              required
              type="email"
              className="form-control"
              id="inputEmail"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input
              ref={passwordInputRef}
              name="inputPassword"
              required
              type="password"
              className="form-control"
              id="inputPassword"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
