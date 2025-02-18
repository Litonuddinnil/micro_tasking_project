import { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { CiLogout } from "react-icons/ci";

const Login = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [captchaMessage, setCaptchaMessage] = useState("");
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  useEffect(() => {
    loadCaptchaEnginge(6); // Load a 6-character captcha
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await signInUser(email, password);
      if (result) {
        Swal.fire({
          title: "Successfully Logged In!",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate(from, { replace: true });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  const handleCaptchaValidate = (e) => {
    const captchaValue = e.target.value;
    if (validateCaptcha(captchaValue)) {
      setIsDisabled(false);
      setCaptchaMessage("Captcha Matched ✅");
    } else {
      setIsDisabled(true);
      setCaptchaMessage("Captcha Does Not Match ❌");
    }
  };

  return (
    <>
      <Helmet>
        <title>Micro Tasking Platform | Login</title>
      </Helmet>

      <div className="relative min-h-screen w-full flex items-center justify-center bg-background overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 animate-wave">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#4f46e5"
              fillOpacity="0.3"
              d="M0,64L40,64C80,64,160,64,240,90.7C320,117,400,171,480,186.7C560,203,640,181,720,176C800,171,880,181,960,181.3C1040,181,1120,171,1200,165.3C1280,160,1360,160,1400,160L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Login Card */}
        <div className="relative z-10 card bg-white shadow-md rounded-lg p-6 w-full max-w-md">
         
         <h1 className="text-2xl  font-extrabold text-center text-text">
            Login to your account
          </h1>
          <Link to={"/"} className="absolute top-0 right-4 "><CiLogout className="text-red-600 text-3xl font-extrabold" /></Link>
     
          <p className="text-center text-md mt-3">
            Don&apos;t have an account?{" "}
            <a href="/register" className="text-blue-600 font-medium underline">
              Sign Up Here
            </a>
          </p>

          <form onSubmit={handleLogin} className="space-y-4 mt-4">
            <div className="form-control">
              <label className="text-sm font-medium mb-1">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered input-sm w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="text-sm font-medium mb-1">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered input-sm w-full"
                required
              />
              <a href="#" className="text-xs text-primary mt-1 hover:underline">
                Forgot password?
              </a>
            </div>

            <div className="form-control">
              <label className="text-sm font-medium mb-1">Captcha</label>
              <LoadCanvasTemplate />
              <input
                name="captcha"
                type="text"
                onBlur={handleCaptchaValidate}
                placeholder="Type the captcha above"
                className="input input-bordered input-sm w-full mt-2"
                required
              />
              {captchaMessage && (
                <p
                  className={`text-xs mt-1 ${
                    isDisabled ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {captchaMessage}
                </p>
              )}
            </div>

            <div className="form-control mt-4">
              <button
                type="submit"
                disabled={isDisabled}
                className="btn btn-primary text-white btn-sm w-full disabled:opacity-50"
              >
                Login
              </button>
            </div>
          </form>

          <div className="mt-4">
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
