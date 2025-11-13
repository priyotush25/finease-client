import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const AddTransaction = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // এখানে তুমি API বা Firebase call করতে পারো
      const transaction = {
        userEmail: user.email,
        title,
        amount: parseFloat(amount),
        type,
        category,
        date,
      };
      console.log(transaction); // Remove after real API call
      toast.success("Transaction added successfully!");
      navigate("/my-transactions");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-full max-w-lg shadow-xl p-8 rounded-2xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Add Transaction</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered w-full bg-white text-black focus:border-green-500 focus:ring-green-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Amount"
            className="input input-bordered w-full bg-white text-black focus:border-green-500 focus:ring-green-500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          <select
            className="select select-bordered w-full bg-white text-black focus:border-green-500 focus:ring-green-500"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <input
            type="text"
            placeholder="Category"
            className="input input-bordered w-full bg-white text-black focus:border-green-500 focus:ring-green-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />

          <input
            type="date"
            className="input input-bordered w-full bg-white text-black focus:border-green-500 focus:ring-green-500"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <button
            type="submit"
            className="btn bg-white text-green-700 hover:bg-gray-100 border-none w-full"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Transaction"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
