import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, updateUserProfile } = useAuth();
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateUserProfile({ displayName: name, photoURL });
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="card w-full max-w-md p-6 rounded-2xl shadow-xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">My Profile</h2>

        {/* Profile Photo */}
        <div className="flex justify-center mb-6">
          <img
            src={photoURL || "https://i.ibb.co.com/Hp3NBfMd/avatar.png"}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-white"
          />
        </div>

        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full text-black"
            value={user?.email || ""}
            disabled
          />
          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered w-full text-black"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />

          <button
            type="submit"
            className="btn bg-white text-green-700 border-none"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
