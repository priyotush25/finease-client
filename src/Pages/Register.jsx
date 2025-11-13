import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const { signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState(""); // <-- photoURL input
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Password Validation
  const validatePassword = (password) => {
    const errors = [];
    if (!/[A-Z]/.test(password))
      errors.push("Password must have an uppercase letter");
    if (!/[a-z]/.test(password))
      errors.push("Password must have a lowercase letter");
    if (password.length < 6)
      errors.push("Password must be at least 6 characters");
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const errors = validatePassword(password);
    if (errors.length > 0) {
      errors.forEach((err) => toast.error(err));
      setLoading(false);
      return;
    }

    try {
      await signup(email, password, name, photoURL); // <-- pass photoURL
      toast.success("Registered successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Google login
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
    <div className="m-10 flex items-center justify-center">
      <div className="card w-full max-w-md shadow-xl p-8 rounded-2xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full bg-white text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full bg-white text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Profile Photo URL"
            className="input input-bordered w-full bg-white text-black"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full bg-white text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="btn bg-white text-green-700 hover:bg-gray-100 border-none w-full"
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

        <p className="mt-4 text-center text-white">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-300 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
