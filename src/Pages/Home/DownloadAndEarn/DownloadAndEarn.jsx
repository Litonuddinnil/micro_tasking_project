import Lottie from "lottie-react";
import World from "../../../Imag/world.json";

const DownloadAndEarn = () => {
  return (
    <div className="relative mb-12 p-8 md:p-12   rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-6">
      <div className="absolute inset-0 opacity-90">
        <div className="w-60 h-60 md:w-80 md:h-80">
          <Lottie animationData={World} loop autoplay />
        </div>
      </div>

      <div className="relative md:w-1/2 w-full">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
          Empowering You to Earn More, Anytime, Anywhere!
        </h1>
        <p className="md:text-lg leading-relaxed ">
          Our Micro Tasking and Earning Platform connects individuals and
          businesses through simple, flexible work opportunities. Whether you're
          looking to earn extra income by completing small tasks or seeking
          skilled workers to get your jobs done, our platform is built to suit
          your needs. With dedicated features for Workers, Buyers, and Admins,
          we ensure a smooth experience for task management, secure payments,
          and seamless collaboration. Join a thriving community and start
          unlocking your earning potential today!
        </p>
      </div>

      <div className="relative   md:w-1/2 w-full flex justify-center">
        <Lottie animationData={World} loop autoplay className="w-full h-full" />
      </div>
    </div>
  );
};

export default DownloadAndEarn;
