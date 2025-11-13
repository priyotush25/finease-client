import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const Overview = () => {
  const { user } = useAuth();
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      if (!user) return;
      setLoading(true);
      try {
        const res = await axios.get(
          `https://finease-server-chi.vercel.app/transactions?email=${user.email}`
        );

        const transactions = res.data.map((tx) => ({
          ...tx,
          amount: Number(tx.amount),
        }));

        const income = transactions
          .filter((tx) => tx.type === "income")
          .reduce((acc, tx) => acc + tx.amount, 0);
        const expense = transactions
          .filter((tx) => tx.type === "expense")
          .reduce((acc, tx) => acc + tx.amount, 0);

        setTotalIncome(income);
        setTotalExpense(expense);
        setBalance(income - expense);
      } catch (error) {
        toast.error("Failed to fetch summary");
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, [user]);

  return (
    <section className="flex flex-wrap justify-center gap-6 py-12 px-4">
      <div className="card p-6 rounded-2xl bg-green-400 text-white w-64 shadow-lg text-center">
        <p className="font-semibold text-lg">Total Balance</p>
        <p className="text-2xl font-bold mt-2">
          {loading ? "..." : `$${balance}`}
        </p>
      </div>
      <div className="card p-6 rounded-2xl bg-green-500 text-white w-64 shadow-lg text-center">
        <p className="font-semibold text-lg">Total Income</p>
        <p className="text-2xl font-bold mt-2">
          {loading ? "..." : `$${totalIncome}`}
        </p>
      </div>
      <div className="card p-6 rounded-2xl bg-green-600 text-white w-64 shadow-lg text-center">
        <p className="font-semibold text-lg">Total Expense</p>
        <p className="text-2xl font-bold mt-2">
          {loading ? "..." : `$${totalExpense}`}
        </p>
      </div>
    </section>
  );
};

export default Overview;
