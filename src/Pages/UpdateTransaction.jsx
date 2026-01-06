import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { api } from "../api/axios";

const UpdateTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    type: "income",
    category: "",
    amount: "",
    description: "",
    date: "",
  });

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const res = await api.get(`/transactions/${id}`);
        const tx = res.data;
        setForm({
          type: tx.type,
          category: tx.category,
          amount: tx.amount,
          description: tx.description,
          date: new Date(tx.date).toISOString().split("T")[0],
        });
      } catch (error) {
        toast.error("Failed to load transaction");
      }
    };
    fetchTransaction();
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/transactions/${id}`, form);
      toast.success("Transaction updated!");
      navigate(`/transaction/${id}`);
    } catch (error) {
      toast.error("Update failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="card p-8 rounded-2xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Update Transaction
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="input input-bordered w-full text-black"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            className="input input-bordered w-full text-black"
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
            className="input input-bordered w-full text-black"
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="input input-bordered w-full text-black"
            required
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="input input-bordered w-full text-black"
            required
          />
          <button
            type="submit"
            className="btn bg-white text-green-700 hover:bg-gray-100"
          >
            Update Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTransaction;
