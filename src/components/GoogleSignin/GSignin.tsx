// import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/AuthHook/useAuth";
import { toast } from "react-toastify";

const GSignin = () => {
  const { googleLogin } = useAuth();
  const handleGLogin = async () => {
    try {
      await googleLogin();
      toast.success("User logged in successfully.");
    } catch (error) {
      toast.warn("Something went wrong!");
      console.error(error);
    }
  };
  return (
    <div>
      {/* Social Login: Neutral style */}
      <button
        onClick={handleGLogin}
        className="btn hover:btn-neutral w-full flex items-center gap-2 font-medium"
      >
        <FcGoogle size={22} />
        Continue with Google
      </button>
    </div>
  );
};

export default GSignin;
