import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const MyTransactions = () => {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        // এখানে তুমি API/Firebase call করতে পারো
        // উদাহরণ purpose only:
        const dummyData = [
          {
            id: 1,
            title: "Salary",
            amount: 5000,
            type: "income",
            category: "Job",
            date: "2025-11-01",
          },
          {
            id: 2,
            title: "Groceries",
            amount: 150,
            type: "expense",
            category: "Food",
            date: "2025-11-05",
          },
        ];
        setTransactions(dummyData);
      } catch (error) {
        toast.error("Failed to fetch transactions");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [user]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 bg-gray-100">
      <div className="w-full max-w-5xl card shadow-xl p-6 rounded-2xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">My Transactions</h2>

        {loading ? (
          <p className="text-center text-white">Loading...</p>
        ) : transactions.length === 0 ? (
          <p className="text-center text-white">No transactions found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full text-white">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>Category</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-green-700">
                    <td>{tx.title}</td>
                    <td>${tx.amount}</td>
                    <td>{tx.type}</td>
                    <td>{tx.category}</td>
                    <td>{tx.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTransactions;
