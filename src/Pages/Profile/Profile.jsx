import { Helmet } from "react-helmet";
import useUser from "../../hooks/useUser";

const Profile = () => {
  const [userData] = useUser();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <Helmet>
        <title>Micro Platform | My Profile</title>
      </Helmet>
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-4xl border border-gray-200">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
          Profile Overview
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="flex-shrink-0">
            <img
              className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shadow-lg border-4 border-gray-200"
              src={
                userData?.photoURL || "https://via.placeholder.com/150"
              }
              alt="User Profile"
            />
          </div>

          <div className="text-left space-y-6 w-full">
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-700">Name</h2>
              <p className="text-lg text-gray-900">{userData?.name || "N/A"}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-700">Email</h2>
              <p className="text-lg text-gray-900">{userData?.email || "N/A"}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-700">Role</h2>
              <p className="text-lg text-gray-900">{userData?.role || "N/A"}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-gray-700">Coins</h2>
                <p className="text-lg text-gray-900">{userData?.coins || 0}</p>
              </div> 
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-gray-700">Rating</h2>
                <p className="text-lg text-gray-900">{userData?.rating || "N/A"}</p>
              </div>
            </div> 
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-700">Location</h2>
              <p className="text-lg text-gray-900">{userData?.location || "N/A"}</p>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
