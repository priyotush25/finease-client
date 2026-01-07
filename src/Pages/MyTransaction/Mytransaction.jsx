import React, { useState, useEffect } from 'react';
import Transactioncard from './Transactioncard';
import NoDataMsg from '../../Components/NoMessage/NoDataMsg';
import Loader from '../../Components/Loading/Loader';
import useAuth from '../../Hooks/useAuth';
import Container from '../../Components/Container/Container';
import { FiFilter, FiTrendingUp, FiTrendingDown, FiList } from 'react-icons/fi';
import { toast } from 'react-toastify';

const MyTransaction = () => {
    const { user } = useAuth();
    const [infos, setInfos] = useState([]);
    const [loader, setLoader] = useState(true);
    const [sorted, setSorted] = useState('Sort by Date & Amount');
    const [sortedType, setSortedType] = useState('Sort by Income & Expense');

  useEffect(() => {
    if (!user) return;

    const fetchTransactions = async () => {
        setLoader(true);
        try {
            const token = await user.getIdToken(); // 🔑 Firebase token
            const res = await fetch(`${import.meta.env.VITE_API_URL}/my-transaction?email=${user.email}`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (!res.ok) {
                throw new Error("Unauthorized or failed to fetch transactions");
            }

            const data = await res.json();
            setInfos(data);
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        } finally {
            setLoader(false);
        }
    };

    fetchTransactions();
}, [user]);

    const sortedByType = (() => {
        if (sortedType === 'Income') {
            return [...infos].filter(info => info.type === 'Income');
        } else if (sortedType === 'Expense') {
            return [...infos].filter(info => info.type === 'Expense');
        } else {
            return infos;
        }
    })();
    
    const sortedTransactions = (() => {
        if (sorted === 'lowToHigh') {
            return [...sortedByType].sort((a, b) => (a.amount) - (b.amount));
        } else if (sorted === 'highToLow') {
            return [...sortedByType].sort((a, b) => (b.amount) - (a.amount));
        } else if (sorted === 'Newest') {
            return [...sortedByType].sort((a, b) => new Date((b.date)) - new Date((a.date)));
        } else if (sorted === 'Oldest') {
            return [...sortedByType].sort((a, b) => new Date((a.date)) - new Date((b.date)));
        } else {
            return sortedByType;
        }
    })();

    if (loader) {
        return <Loader />;
    }

    return (
        <section className='bg-base-200/50 py-16 min-h-screen transition-colors duration-300'>
            <title>My Transaction | FinEase</title>
            <Container>
                {/* Header Section */}
                <div className='flex flex-col md:flex-row justify-between items-end mb-12 gap-6'>
                    <div className='text-left'>
                        <h2 className='font-black text-3xl lg:text-4xl text-base-content mb-2'>
                            History <span className='text-emerald-600'>Ledger</span>
                        </h2>
                        <div className='flex items-center gap-2 text-base-content/50 font-medium'>
                            <FiList className='text-emerald-600' />
                            <span>Showing {sortedTransactions.length} total records</span>
                        </div>
                    </div>

                    {/* Filter Controls */}
                    <div className='flex flex-wrap gap-3 w-full md:w-auto'>
                        <div className='relative flex-1 md:flex-none'>
                            <FiFilter className='absolute left-4 top-1/2 -translate-y-1/2 text-emerald-600 z-10 pointer-events-none' />
                            <select 
                                defaultValue="none" 
                                onChange={(e) => setSortedType(e.target.value)} 
                                className="select select-bordered w-full md:w-[220px] pl-11 rounded-2xl bg-base-100 border-base-content/10 focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 font-bold"
                            >
                                <option value='none'>All Types</option>
                                <option value='Income'>Incomes Only</option>
                                <option value='Expense'>Expenses Only</option>
                            </select>
                        </div>

                        <div className='relative flex-1 md:flex-none'>
                            <FiTrendingUp className='absolute left-4 top-1/2 -translate-y-1/2 text-emerald-600 z-10 pointer-events-none' />
                            <select 
                                defaultValue="none" 
                                onChange={(e) => setSorted(e.target.value)} 
                                className="select select-bordered w-full md:w-[220px] pl-11 rounded-2xl bg-base-100 border-base-content/10 focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 font-bold"
                            >
                                <option value='none'>Default Sort</option>
                                <option value='lowToHigh'>Amount: Low to High</option>
                                <option value='highToLow'>Amount: High to Low</option>
                                <option value='Newest'>Date: Newest First</option>
                                <option value='Oldest'>Date: Oldest First</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Quick Stats Summary Bar */}
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10'>
                    <div className='bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl'>
                        <p className='text-[10px] uppercase font-bold tracking-widest text-emerald-700/60'>Filtered Count</p>
                        <p className='text-2xl font-black text-emerald-700'>{sortedTransactions.length}</p>
                    </div>
                    {/* These placeholders show the potential for real sum logic later */}
                    <div className='bg-base-100 border border-base-content/5 p-4 rounded-2xl hidden lg:block'>
                        <p className='text-[10px] uppercase font-bold tracking-widest text-base-content/40'>Active Filter</p>
                        <p className='text-lg font-bold text-base-content'>{sortedType === 'none' ? 'All Transactions' : sortedType}</p>
                    </div>
                </div>

                {/* Content Grid */}
                {
                    infos.length === 0 ? (
                        <div className="py-20 bg-base-100 rounded-[2.5rem] border border-dashed border-base-content/20">
                            <NoDataMsg />
                        </div>
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                            {
                                sortedTransactions.map(info => (
                                    <div key={info._id} className="hover:translate-y-[-5px] transition-transform duration-300">
                                        <Transactioncard info={info} infos={infos} setInfos={setInfos} />
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </Container>
        </section>
    );
};

export default MyTransaction;