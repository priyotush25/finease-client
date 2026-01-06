import React, { useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Container from '../layout/Container';
import Loader from '../../loader/Loader';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowDownRight,
  PiggyBank,
  TrendingUp,
  Wallet,
} from 'lucide-react';

const Overview = () => {
  const { user } = React.useContext(AuthContext);
  const [infos, setInfos] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (!user) return;

    fetch(`${import.meta.env.VITE_API_BASE_URL}/my-transaction?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setInfos(data);
        setLoader(false);
      })
      .catch(err => {
        console.error(err);
        setLoader(false);
      });
  }, [user]);

  if (loader || !user) {
    return <Loader />;
  }

  const incomeData = infos.filter(info => info.type === 'Income');
  const totalIncome = incomeData.reduce((acc, item) => acc + Number(item.amount), 0);

  const expenseData = infos.filter(info => info.type === 'Expense');
  const totalExpense = expenseData.reduce((acc, item) => acc + Number(item.amount), 0);

  const totalSavings = Math.max(totalIncome - totalExpense, 0);

  const cardVariants = {
    offscreen: { y: 40, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, duration: 0.8 },
    },
  };

  const StatCard = ({ icon, title, amount, message, gradient, iconColor }) => (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      className="relative group rounded-3xl p-8 bg-base-100 border border-base-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 flex flex-col"
    >
      <div
        className={`absolute -top-10 left-1/2 -translate-x-1/2 p-6 rounded-full bg-gradient-to-r ${gradient} shadow-xl transition-transform duration-500 group-hover:scale-110`}
      >
        {React.cloneElement(icon, { className: "w-10 h-10 text-white" })}
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-base-content/70 mb-2">{title}</h3>
        <p className="text-4xl font-bold text-base-content mb-6">
          ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
        <p className={`text-lg font-medium ${iconColor}`}>
          {message}
        </p>
      </div>

      <div className={`mt-6 h-1 w-20 mx-auto rounded-full bg-gradient-to-r ${gradient} opacity-80`} />
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 bg-green-400 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-base-100 to-base-200 relative overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-tl from-teal-300 to-green-400 rounded-full opacity-20 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={cardVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Financial <span className="text-green-600">Overview</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full" />
          <p className="mt-6 text-xl text-base-content/70 max-w-2xl mx-auto">
            Track your progress and stay in control with real-time insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <StatCard
            icon={<ArrowUpRight />}
            title="Total Income"
            amount={totalIncome}
            message={
              totalIncome === 0
                ? "Start adding income to see your progress!"
                : totalIncome > totalExpense
                ? "Excellent! You're earning more than spending."
                : "Keep going — small steps add up."
            }
            gradient="from-green-400 to-emerald-500"
            iconColor="text-green-600"
          />

          <StatCard
            icon={<ArrowDownRight />}
            title="Total Expenses"
            amount={totalExpense}
            message={
              totalExpense === 0
                ? "No expenses recorded yet."
                : totalExpense > totalIncome
                ? "Consider reviewing your spending this month."
                : "Great control over your expenses!"
            }
            gradient="from-orange-400 to-red-500"
            iconColor="text-orange-600"
          />

          <StatCard
            icon={<PiggyBank />}
            title="Current Savings"
            amount={totalSavings}
            message={
              totalSavings === 0
                ? "Time to build your savings — you're capable of it!"
                : "Amazing work! You're building wealth."
            }
            gradient="from-emerald-400 to-teal-500"
            iconColor="text-emerald-600"
          />
        </div>
      </Container>
    </section>
  );
};

export default Overview;