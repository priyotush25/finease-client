import React, { useEffect, useState } from 'react';
import PieChartExample from './PieChart';
import Loader from '../../Components/Loading/Loader';
import useAuth from '../../Hooks/useAuth';
import Container from '../../Components/Container/Container';
import { FiTrendingUp, FiTrendingDown, FiDollarSign } from 'react-icons/fi';
import { BiPieChartAlt } from "react-icons/bi"; 
import toast from 'react-hot-toast';

const Report = () => {
    const [infos, setInfos] = useState([]);
    const [loader, setLoader] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        if (!user) return;

        const fetchData = async () => {
            setLoader(true);
            try {
                const token = await user.getIdToken(); // 🔑 Firebase token
                const res = await fetch(`${import.meta.env.VITE_API_URL}/my-transaction?email=${user.email}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!res.ok) throw new Error('Failed to fetch transactions');

                const data = await res.json();
                setInfos(data);
            } catch (error) {
                console.error(error);
                toast.error(error.message);
            } finally {
                setLoader(false);
            }
        };

        fetchData();
    }, [user]);

    if (loader) return <Loader />;

    // --- Expense Logic ---
    const allExpenses = infos.filter(item => item.type === 'Expense');
    const categoriesE = [...new Set(allExpenses.map(item => item.category))];
    const updatedExpenseData = categoriesE.map(cat => ({
        name: cat,
        value: allExpenses
            .filter(e => e.category === cat)
            .reduce((sum, curr) => sum + Number(curr.amount), 0)
    }));

    // --- Income Logic ---
    const allIncome = infos.filter(item => item.type === 'Income');
    const categoriesI = [...new Set(allIncome.map(item => item.category))];
    const updatedIncomeData = categoriesI.map(cat => ({
        name: cat,
        value: allIncome
            .filter(i => i.category === cat)
            .reduce((sum, curr) => sum + Number(curr.amount), 0)
    }));

    // --- Summary Totals ---
    const totalIncome = updatedIncomeData.reduce((a, b) => a + b.value, 0);
    const totalExpense = updatedExpenseData.reduce((a, b) => a + b.value, 0);
    const netSavings = totalIncome - totalExpense;

    return (
        <section className='bg-base-200/50 min-h-screen py-16 transition-colors duration-300'>
            <title>Financial Reports | FinEase</title>
            <Container>
                {/* Header & Stats Grid */}
                <div className="mb-12">
                    <h2 className='font-black text-3xl lg:text-4xl text-base-content mb-8 flex items-center gap-3'>
                 <BiPieChartAlt size={48} className="mb-4 text-emerald-600" />
                        Wealth <span className='text-emerald-600'>Analytics</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Total Income */}
                        <div className="bg-base-100 p-6 rounded-[2rem] border border-base-content/5 shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center text-xl">
                                    <FiTrendingUp />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-base-content/40 uppercase tracking-widest">Total Income</p>
                                    <p className="text-2xl font-black text-emerald-600">{totalIncome.toLocaleString()} BDT</p>
                                </div>
                            </div>
                        </div>

                        {/* Total Expense */}
                        <div className="bg-base-100 p-6 rounded-[2rem] border border-base-content/5 shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-600 flex items-center justify-center text-xl">
                                    <FiTrendingDown />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-base-content/40 uppercase tracking-widest">Total Expense</p>
                                    <p className="text-2xl font-black text-red-500">{totalExpense.toLocaleString()} BDT</p>
                                </div>
                            </div>
                        </div>

                        {/* Net Savings */}
                        <div className="bg-emerald-950 p-6 rounded-[2rem] shadow-xl shadow-emerald-900/20 text-white">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-xl text-emerald-950">
                                    <FiDollarSign />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Net Balance</p>
                                    <p className="text-2xl font-black">{netSavings.toLocaleString()} BDT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pie Chart */}
                <PieChartExample 
                    updatedExpenseData={updatedExpenseData} 
                    updatedIncomeData={updatedIncomeData} 
                />
            </Container>
        </section>
    );
};

export default Report;
