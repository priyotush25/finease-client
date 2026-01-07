import React, { useEffect, useState } from 'react';
import Loader from '../Loading/Loader';
import StatCard from './hero-section/StatCard';
import useAuth from '../../Hooks/useAuth';
import Container from '../Container/Container';
import { FiTrendingUp, FiTrendingDown, FiPieChart } from 'react-icons/fi';

const Overview = () => {
    const { user } = useAuth();
    const [infos, setInfos] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        if (!user) return;

        fetch(`${import.meta.env.VITE_API_URL}/my-transaction?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(result => result.json())
            .then(data => {
                setInfos(data);
                setLoader(false);
            })
            .catch(() => setLoader(false));
    }, [user]);

    if (loader) return <Loader />;

    // Logic optimizations
    const totalIncome = infos
        .filter(info => info.type === 'Income')
        .reduce((acc, item) => acc + Number(item.amount), 0);
    
    const totalExpense = infos
        .filter(info => info.type === 'Expense')
        .reduce((acc, item) => acc + Number(item.amount), 0);

    const savings = totalIncome - totalExpense;

    return (
        <section className='py-24 bg-base-200/50 transition-colors duration-300'>
            <Container>
                {/* Header with Glass Effect Label */}
                <div className='flex flex-col items-center mb-12'>
                    <div className='flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-sm font-bold uppercase tracking-widest mb-4'>
                        <FiPieChart />
                        <span>Financial Summary</span>
                    </div>
                    <h2 className='text-3xl md:text-5xl font-black text-base-content'>
                        Account <span className='text-emerald-600'>Overview</span>
                    </h2>
                </div>

                {/* Dashboard Card Container */}
                <div className='relative group'>
                    {/* Decorative Background Glows */}
                    <div className='absolute -top-10 -left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity'></div>
                    <div className='absolute -bottom-10 -right-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity'></div>

                    <div className='relative z-10 bg-base-100 border border-base-content/5 shadow-2xl shadow-emerald-900/5 rounded-[2.5rem] p-8 md:p-12'>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            
                            {/* Income Stat */}
                            <StatCard
                                icon={<FiTrendingUp />}
                                title="Total Income"
                                amount={totalIncome}
                                change={totalIncome > totalExpense ? "Healthy Inflow" : "Income Stable"}
                                changeColor="text-emerald-500"
                                trend="up"
                            />

                            {/* Expense Stat */}
                            <StatCard
                                icon={<FiTrendingDown />}
                                title="Total Expense"
                                amount={totalExpense}
                                change={totalExpense > totalIncome ? "High Spending" : "Controlled"}
                                changeColor={totalExpense > totalIncome ? "text-error" : "text-orange-500"}
                                trend="down"
                            />

                            {/* Savings Stat */}
                            <div className="md:border-l border-base-content/10 md:pl-8">
                                <StatCard
                                    icon={<FiPieChart />}
                                    title="Net Savings"
                                    amount={savings < 0 ? 0 : savings}
                                    change={savings > 0 ? "Growth Positive" : "Zero Balance"}
                                    changeColor="text-blue-500"
                                />
                            </div>
                        </div>

                        {/* Financial Tip / Insight Bar */}
                        <div className='mt-12 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-800/50 flex items-center gap-4'>
                           <div className='p-2 bg-emerald-500 rounded-lg text-white'>
                                <FiTrendingUp size={20} />
                           </div>
                           <p className='text-sm md:text-base text-emerald-900 dark:text-emerald-100 font-medium'>
                                {savings > 0 
                                    ? `Great work! You've saved ${((savings/totalIncome)*100).toFixed(1)}% of your income this month.` 
                                    : "You've spent more than you earned. Review your transactions to find savings opportunities."
                                }
                           </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Overview;