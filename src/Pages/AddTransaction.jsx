import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const AddTransaction = () => {
  const { user } = useAuth();

  const [type, setType] = useState("Income");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  const categories = {
    Income: ["Salary", "Freelance", "Investment", "Other"],
    Expense: ["Food", "Rent", "Shopping", "Utilities", "Other"],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!category || !amount || !date) {
      toast.error("Please fill all required fields");
      setLoading(false);
      return;
    }

    const transaction = {
      type,
      category,
      amount: Number(amount),
      description,
      date,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    try {
      // Replace with your backend endpoint
      await axios.post("http://localhost:5000/transactions", transaction);
      toast.success("Transaction added successfully!");
      // Clear form
      setType("Income");
      setCategory("");
      setAmount("");
      setDescription("");
      setDate("");
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="card w-full max-w-lg shadow-xl p-8 bg-white rounded-2xl">
        <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
          Add Transaction
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Type */}
          <select
            className="select select-bordered w-full"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>

          {/* Category */}
          <select
            className="select select-bordered w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            {categories[type].map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Amount */}
          <input
            type="number"
            placeholder="Amount"
            className="input input-bordered w-full"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          {/* Description */}
          <textarea
            placeholder="Description"
            className="textarea textarea-bordered w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* Date */}
          <input
            type="date"
            className="input input-bordered w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          {/* User Email & Name (Read-only) */}
          <input
            type="text"
            placeholder="User Email"
            className="input input-bordered w-full bg-gray-100"
            value={user?.email || ""}
            readOnly
          />
          <input
            type="text"
            placeholder="User Name"
            className="input input-bordered w-full bg-gray-100"
            value={user?.displayName || ""}
            readOnly
          />

          {/* Submit Button */}
          <button
            type="submit"
            className={`btn w-full bg-green-600 text-white hover:bg-green-700 border-none ${
              loading ? "loading" : ""
            }`}
            disabled={loading}
          >
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
