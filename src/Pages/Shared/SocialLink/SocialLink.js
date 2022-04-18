import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

import googleIcon from "../../../images/SocialIcon/google.png";
import Loading from "../../Loading/Loading";

const SocialLink = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    console.log("user", user);
  }

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
    navigate("/");
  };

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      <div className="">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-primary bg-dark w-100 d-block mx-auto my-2"
        >
          <img className="" style={{ width: "30px" }} src={googleIcon} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
        <p>{error?.message}</p>
      </div>
    </div>
  );
};

export default SocialLink;
