import Lottie from "lottie-react";
import World from "../../../Imag/world.json";

const DownloadAndEarn = () => {
  return (
    <div className="relative mb-12 p-8 md:p-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center gap-8">
      <div className="absolute inset-0 opacity-20">
        <Lottie animationData={World} loop autoplay className="w-full h-full" />
      </div>

      <div className="relative z-10 md:w-1/2 w-full">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
          Download & Install Appy Now
        </h1>
        <p className="text-base md:text-lg leading-relaxed">
          Work Up Job Site is the ultimate platform for micro-jobs and freelance
          services, connecting freelancers and businesses worldwide. Freelancers
          can earn money online by completing remote tasks, showcasing their
          skills, and working with global clients. Businesses can easily find and
          hire talented contractors to complete projects efficiently. With
          advanced filters, seamless communication, and secure payments, Work Up
          Job Site ensures a smooth experience for everyone. Join the world’s
          leading micro-job marketplace today!
        </p>
        <button className="mt-6 bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-indigo-50 transition">
          Download Now
        </button>
      </div>

      <div className="relative z-10 md:w-1/2 w-full flex justify-center">
        <div className="w-60 h-60 md:w-80 md:h-80">
          <Lottie animationData={World} loop autoplay />
        </div>
      </div>
    </div>
  );
};

export default DownloadAndEarn;
