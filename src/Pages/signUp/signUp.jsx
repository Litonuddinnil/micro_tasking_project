import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import signUPImg from "../../assets/signUp.json";
import Lottie from "lottie-react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";

const Image_Hosting_Key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const Image_Hosting_Api = `https://api.imgbb.com/1/upload?key=${Image_Hosting_Key}`;
const GEOCODING_API_KEY = import.meta.env.VITE_API_KEY_MAPS;
const REVERSE_GEOCODING_URL = `https://api.bigdatacloud.net/data/reverse-geocode-client`; // Free reverse geocoding API

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const [location, setLocation] = useState("");
  const [locationLoading, setLocationLoading] = useState(true);
  const navigate = useNavigate();
  const { createUser, userUpdateProfile } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `${REVERSE_GEOCODING_URL}?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            const data = await response.json();
            const locationName = `${data.city}, ${data.countryName}`;

            setLocation(locationName);
            setValue("location", locationName);
          } catch (error) {
            console.error("Error fetching location name:", error);
            setLocation("Unable to fetch location");
            setValue("location", "Unable to fetch location");
          }
          setLocationLoading(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocation("Unable to retrieve location");
          setValue("location", "Unable to retrieve location");
          setLocationLoading(false);
        }
      );
    } else {
      setLocation("Geolocation is not supported");
      setValue("location", "Geolocation is not supported");
      setLocationLoading(false);
    }
  }, [setValue]);

  const onSubmit = async (data) => {
    try {
      let photoURL = "";
      if (data.task_image?.[0]) {
        const imageFile = new FormData();
        imageFile.append("image", data.task_image[0]);
        const imageRes = await fetch(Image_Hosting_Api, {
          method: "POST",
          body: imageFile,
        });
        const imageData = await imageRes.json();
        if (imageData.success) {
          photoURL = imageData.data.display_url;
        }
      }

      if (data.password !== data.confirmPassword) {
        Swal.fire({ title: "Error", text: "Passwords do not match!", icon: "error" });
        return;
      }

      const result = await createUser(data.email, data.password);
      await userUpdateProfile(data.name, photoURL);

      const coinAmount = data.role === "Worker" ? 10 : 50;
      const ratingWorker = 3;

      const userPayload = {
        name: data.name,
        email: data.email,
        photoURL: photoURL,
        role: data.role,
        coins: coinAmount,
        location: data.location,
        rating: ratingWorker,
      };

      const res = await axiosPublic.post("/users", userPayload);
      if (res.data.insertedId) {
        Swal.fire({ title: "Account Created Successfully!", icon: "success" });
        reset();
        navigate("/dashboard");
      }
    } catch (err) {
      Swal.fire({ title: "Error", text: err.message, icon: "error" });
    }
  };

  return (
    <>
    <Helmet>
      <title>Micro Tasking Platform | Sign Up</title>
    </Helmet>
    <div className="relative min-h-screen flex items-center justify-center bg-background bg-cover bg-center">
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

      <div className="relative flex flex-col md:flex-row items-center w-full max-w-5xl bg-background shadow-md rounded-lg overflow-hidden">
        <div className="p-8 w-full md:w-2/3">
          <h1 className="text-4xl font-bold text-text text-center mb-8">Create an Account</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input {...register("name", { required: "Name is required" })} placeholder="Full Name" className="input input-bordered w-full" />
            <input {...register("email", { required: "Email is required" })} placeholder="Email" className="input input-bordered w-full" />

            {/* Location Field */}
            <div className="relative">
              <input
                {...register("location", { required: "Location is required" })}
                value={location}
                readOnly
                disabled={locationLoading}
                placeholder={locationLoading ? "Fetching location..." : location}
                className="input input-bordered w-full  cursor-not-allowed"
              />
              {locationLoading && <span className="absolute right-3 top-3 text-gray-500 text-sm">Fetching...</span>}
            </div>

            <input {...register("task_image", { required: true })} type="file" className="file-input w-full" />
            <select {...register("role", { required: true })} className="select select-bordered w-full">
              <option value="">Choose Role</option>
              <option value="Worker">Worker</option>
              <option value="Buyer">Buyer</option>
            </select>
            <input {...register("password", { required: true })} type="password" placeholder="Password" className="input input-bordered w-full" />
            <input {...register("confirmPassword", { required: true })} type="password" placeholder="Confirm Password" className="input input-bordered w-full" />
            <button type="submit" className="btn btn-primary text-white w-full">Sign Up</button>
          </form>
        </div>
        <div className="sm:hidden md:block w-1/3 bg-background flex flex-col items-center justify-center p-6">
          <Lottie animationData={signUPImg} className="w-48 h-48" />
          <SocialLogin />
          <p className="mt-4">Already have an account? <a href="/login" className="text-blue-500">Log in here</a></p>
        </div>
      </div>
    </div>
  </>
  );
};

export default SignUp;
