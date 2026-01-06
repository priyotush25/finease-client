import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { api } from "../api/axios";

const TransactionDetails = () => {
  const { id } = useParams();
  const [tx, setTx] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const res = await api.get(`/transactions/${id}`);
        setTx(res.data);
      } catch (error) {
        toast.error("Failed to load transaction");
      } finally {
        setLoading(false);
      }
    };
    fetchTransaction();
  }, [id]);

  if (loading) return <p className="text-center mt-6">Loading...</p>;
  if (!tx) return <p className="text-center mt-6">Transaction not found</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 ">
      <div className="card w-full max-w-md p-6 rounded-2xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Transaction Details
        </h2>
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
          <strong>Description:</strong> {tx.description}
        </p>
        <p>
          <strong>Date:</strong> {new Date(tx.date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default TransactionDetails;
