import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useAuth } from "../context/AuthContext";

const Reports = () => {
  const { user } = useAuth();
  const [allTransactions, setAllTransactions] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [balance, setBalance] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState("");
  // Fetch all transactions from server
  useEffect(() => {
    const fetchTransactions = async () => {
      if (!user) return;
      setLoading(true);
      try {
        const res = await axios.get(
          `https://finease-server-chi.vercel.app/transactions?email=${user.email}`
        );
        const txs = res.data.map((tx) => ({
          ...tx,
          amount: Number(tx.amount),
          date: new Date(tx.date),
        }));
        setAllTransactions(txs);
      } catch (error) {
        toast.error("Failed to fetch transactions");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [user]);

  // Filter transactions
  useEffect(() => {
    if (!allTransactions) return;

    const filteredTxs = selectedMonth
      ? allTransactions.filter((tx) => {
          const txMonth = tx.date.getMonth() + 1; // 1-12
          const txYear = tx.date.getFullYear();
          const [year, month] = selectedMonth.split("-").map(Number);
          return txYear === year && txMonth === month;
        })
      : allTransactions;

    setTransactions(filteredTxs);

    const income = filteredTxs
      .filter((tx) => tx.type === "income")
      .reduce((acc, tx) => acc + tx.amount, 0);

    const expense = filteredTxs
      .filter((tx) => tx.type === "expense")
      .reduce((acc, tx) => acc + tx.amount, 0);

    setTotalIncome(income);
    setTotalExpense(expense);
    setBalance(income - expense);
  }, [allTransactions, selectedMonth]);

  // Category pie chart
  const categoryMap = {};
  transactions.forEach((tx) => {
    if (categoryMap[tx.category]) categoryMap[tx.category] += tx.amount;
    else categoryMap[tx.category] = tx.amount;
  });
  const categoryData = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#9b59b6",
    "#e74c3c",
  ];

  // Monthly totals for bar chart
  const monthlyMap = {};
  transactions.forEach((tx) => {
    const month = tx.date.toLocaleString("default", {
      month: "short",
      year: "numeric",
    });
    if (!monthlyMap[month]) monthlyMap[month] = 0;
    monthlyMap[month] += tx.type === "income" ? tx.amount : -tx.amount;
  });
  const monthlyData = Object.keys(monthlyMap).map((key) => ({
    month: key,
    total: monthlyMap[key],
  }));

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 bg-gray-100">
      <div className="w-full max-w-6xl card shadow-xl p-6 rounded-2xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Reports</h2>

        {loading ? (
          <p className="text-center text-white">Loading...</p>
        ) : transactions.length === 0 ? (
          <p className="text-center text-white">No transactions found.</p>
        ) : (
          <>
            {/* Summary */}
            <div className="flex justify-around mb-6 text-white flex-wrap gap-4">
              <div className="text-center bg-green-700 p-4 rounded-xl w-40">
                <p className="text-lg font-semibold">Total Income</p>
                <p className="text-xl font-bold">${totalIncome}</p>
              </div>
              <div className="text-center bg-green-700 p-4 rounded-xl w-40">
                <p className="text-lg font-semibold">Total Expense</p>
                <p className="text-xl font-bold">${totalExpense}</p>
              </div>
              <div className="text-center bg-green-700 p-4 rounded-xl w-40">
                <p className="text-lg font-semibold">Balance</p>
                <p className="text-xl font-bold">${balance}</p>
              </div>
            </div>

            {/* Month Filter */}
            <div className="mb-6 flex justify-center">
              <input
                type="month"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="input input-bordered"
              />
            </div>

            {/* Charts */}
            <div className="flex flex-wrap justify-around gap-6">
              {/* Pie Chart */}
              <div className="w-full md:w-1/2 h-64">
                <h3 className="text-xl font-semibold text-center mb-2">
                  Category-wise
                </h3>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    >
                      {categoryData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Bar Chart */}
              <div className="w-full md:w-1/2 h-64">
                <h3 className="text-xl font-semibold text-center mb-2">
                  Monthly Total
                </h3>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#00C49F" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Reports;
