import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { api } from "../api/axios";
import { useAuth } from "../context/AuthContext";

const MyTransactions = () => {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchTransactions = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const res = await api.get(`/transactions?email=${user.email}`);
      setTransactions(res.data);
    } catch (error) {
      toast.error("Failed to fetch transactions");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this transaction?"))
      return;
    try {
      await api.delete(`/transactions/${id}`);
      setTransactions(transactions.filter((tx) => tx._id !== id));
      toast.success("Transaction deleted!");
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [user]);

  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-green-800">
        My Transactions
      </h2>

      {loading ? (
        <p>Loading...</p>
      ) : transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {transactions.map((tx) => (
            <div
              key={tx._id}
              className="card p-4 rounded-2xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white shadow-lg"
            >
              <p>
                <strong>Type:</strong> {tx.type}
              </p>
              <p>
                <strong>Category:</strong> {tx.category}
              </p>
              <p>
                <strong>Amount:</strong> ${tx.amount}
              </p>
              <p>
                <strong>Date:</strong> {new Date(tx.date).toLocaleDateString()}
              </p>
              <div className="flex justify-between mt-4">
                <button
                  className="btn btn-sm btn-white text-green-700"
                  onClick={() => navigate(`/transaction/update/${tx._id}`)}
                >
                  Update
                </button>
                <button
                  className="btn btn-sm btn-red-600"
                  onClick={() => handleDelete(tx._id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-sm btn-outline btn-white"
                  onClick={() => navigate(`/transaction/${tx._id}`)}
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyTransactions;
