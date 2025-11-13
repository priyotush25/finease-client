import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const { signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // -------- Email/Password Signup --------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signup(email, password, name);
      toast.success("Registered successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // -------- Google Signup/Login --------
  const handleGoogleSignup = async () => {
    setLoading(true);
    try {
      await loginWithGoogle();
      toast.success("Logged in with Google!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* -------- Gradient Card -------- */}
      <div className="card w-full max-w-md shadow-xl p-8 rounded-2xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full bg-white text-black focus:border-green-500 focus:ring-green-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full bg-white text-black focus:border-green-500 focus:ring-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full bg-white text-black focus:border-green-500 focus:ring-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="btn bg-white text-green-700 hover:bg-gray-100 hover:text-green-500 border-none w-full"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="divider before:bg-white after:bg-white font-semibold">
          OR
        </div>

        <button
          onClick={handleGoogleSignup}
          className="btn btn-outline border-white text-white hover:bg-green-100 flex items-center justify-center gap-2 w-full"
          disabled={loading}
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
