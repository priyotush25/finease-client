import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const Reports = () => {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Summary
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        // Example dummy data
        const dummyData = [
          {
            id: 1,
            title: "Salary",
            amount: 5000,
            type: "income",
            date: "2025-11-01",
          },
          {
            id: 2,
            title: "Groceries",
            amount: 150,
            type: "expense",
            date: "2025-11-05",
          },
          {
            id: 3,
            title: "Freelance",
            amount: 800,
            type: "income",
            date: "2025-11-07",
          },
        ];
        setTransactions(dummyData);

        // Calculate summary
        const income = dummyData
          .filter((tx) => tx.type === "income")
          .reduce((acc, tx) => acc + tx.amount, 0);
        const expense = dummyData
          .filter((tx) => tx.type === "expense")
          .reduce((acc, tx) => acc + tx.amount, 0);

        setTotalIncome(income);
        setTotalExpense(expense);
      } catch (error) {
        toast.error("Failed to fetch transactions");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [user]);

  const balance = totalIncome - totalExpense;

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 bg-gray-100">
      <div className="w-full max-w-5xl card shadow-xl p-6 rounded-2xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Reports</h2>

        {loading ? (
          <p className="text-center text-white">Loading...</p>
        ) : (
          <>
            <div className="flex justify-around mb-6 text-white">
              <div className="text-center">
                <p className="text-lg font-semibold">Total Income</p>
                <p className="text-xl font-bold">${totalIncome}</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold">Total Expense</p>
                <p className="text-xl font-bold">${totalExpense}</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold">Balance</p>
                <p className="text-xl font-bold">${balance}</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="table w-full text-white">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-green-700">
                      <td>{tx.title}</td>
                      <td>${tx.amount}</td>
                      <td>{tx.type}</td>
                      <td>{tx.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Reports;
