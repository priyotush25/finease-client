import React, { useState } from 'react';
import { Link } from 'react-router';
import toast from 'react-hot-toast';
import useAuth from '../../Hooks/useAuth';
import Container from '../../Components/Container/Container';
import { FiArrowUpCircle, FiArrowDownCircle, FiDollarSign, FiCalendar, FiEdit3 } from 'react-icons/fi';

const AddTransaction = () => {
    const [bool, setBool] = useState('income');
    const [loading, setLoading] = useState(false);
    const [errAmount, setErrAmount] = useState(null);
    const [errDes, setErrDes] = useState(null);
    const [errDate, setErrDate] = useState(null);
    const { user } = useAuth();

    const loaderTrueFalse = () => {
        setLoading(true);
    };

  const handleIncome = async (e) => {
  e.preventDefault();

  const incomeData = {
    type: "Income",
    category: e.target.category.value,
    amount: Number(e.target.amount.value),
    description: e.target.description.value,
    date: e.target.date.value,
    email: user?.email,
    name: user?.displayName,
  };

  const token = await user.getIdToken();

  fetch(`${import.meta.env.VITE_API_URL}/my-transaction`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(incomeData),
  })
    .then(res => res.json())
    .then(() => {
      toast.success('Transaction Successfully Added!');
    });
};
    const handleExpense = async(e) => {
        e.preventDefault();
        const amountV = e.target.amount.value;
        const descripV = e.target.description.value;
        const dateV = e.target.date.value;

        const expenseData = {
            type: 'Expense',
            category: e.target.category.value,
            amount: Number(e.target.amount.value),
            description: e.target.description.value,
            date: e.target.date.value,
            email: e.target.email.value,
            name: e.target.names.value
        };

        setErrAmount(false);
        setErrDes(false);
        setErrDate(false);
        setLoading(false);

        if (!amountV) {
            toast.error('Please enter a valid amount!');
            setErrAmount(true);
            return;
        }
        if (!descripV) {
            toast.error('Please enter a valid description!');
            setErrDes(true);
            return;
        }
        if (!dateV) {
            toast.error('Please select a valid date!');
            setErrDate(true);
            return;
        }

        loaderTrueFalse();


 const token = await user.getIdToken();

        fetch(`${import.meta.env.VITE_API_URL}/my-transaction`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                 authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(expenseData)
        })
            .then(result => result.json())
            .then(data => {
                e.target.reset();
                toast.success('Transaction Successfully Added!');
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
            });
    };

    return (
        <section className='min-h-screen py-24 bg-base-200/50 flex items-center transition-colors duration-300'>
            <title>Add Transaction | FinEase</title>
            <Container>
                <div className='max-w-4xl mx-auto'>
                    <div className='bg-base-100 rounded-[2.5rem] shadow-2xl border border-base-content/5 overflow-hidden flex flex-col md:flex-row'>
                        
                        {/* Left Side: Summary/Helper (Visual) */}
                        <div className='md:w-1/3 bg-emerald-950 p-10 text-white flex flex-col justify-between'>
                            <div>
                                <h1 className='text-3xl font-black mb-4'>New Log</h1>
                                <p className='text-emerald-100/60 text-sm'>
                                    Recording your daily transactions helps FinEase generate accurate wealth reports for you.
                                </p>
                            </div>

                            <div className='hidden md:block space-y-6'>
                                <div className='p-4 rounded-2xl bg-white/5 border border-white/10'>
                                    <FiArrowUpCircle className='text-emerald-400 text-2xl mb-2' />
                                    <p className='text-xs uppercase font-bold tracking-widest opacity-50'>Income Tip</p>
                                    <p className='text-sm italic'>"Consistency is the key to financial clarity."</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: The Form */}
                        <div className='md:w-2/3 p-8 lg:p-12'>
                            {/* Segmented Control Toggle */}
                            <div className='flex p-1 bg-base-200 rounded-2xl mb-10'>
                                <button 
                                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${bool === 'income' ? 'bg-base-100 text-emerald-600 shadow-sm' : 'text-base-content/40 hover:text-base-content'}`}
                                    onClick={() => setBool('income')}
                                >
                                    <FiArrowUpCircle /> Income
                                </button>
                                <button 
                                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${bool === 'expense' ? 'bg-base-100 text-red-600 shadow-sm' : 'text-base-content/40 hover:text-base-content'}`}
                                    onClick={() => setBool('expense')}
                                >
                                    <FiArrowDownCircle /> Expense
                                </button>
                            </div>

                            <h2 className='text-2xl font-black text-base-content mb-8'>
                                Add {bool === 'income' ? 'Income' : 'Expense'} <span className='text-emerald-600 font-normal opacity-30'>Details</span>
                            </h2>

                            <form onSubmit={bool === 'income' ? handleIncome : handleExpense} className='space-y-6'>
                                
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    {/* Category Select */}
                                    <div className='space-y-2'>
                                        <label className="text-xs font-black uppercase tracking-widest text-base-content/50 ml-1">Category</label>
                                        <select 
                                            name='category' 
                                            className="w-full p-4 rounded-2xl bg-base-200 border border-base-content/5 focus:border-emerald-500/50 outline-none text-base-content font-medium transition-all"
                                            defaultValue={bool === 'income' ? "Salary" : "Food"}
                                        >
                                            {bool === 'income' ? (
                                                <>
                                                    <option value="Salary">Salary</option>
                                                    <option value="Ride Sharing">Ride Sharing</option>
                                                    <option value="Pocket Money">Pocket Money</option>
                                                    <option value="Side Business">Side Business</option>
                                                </>
                                            ) : (
                                                <>
                                                    <option value="Home rent">Home rent</option>
                                                    <option value="Food">Food</option>
                                                    <option value="Transportation">Transportation</option>
                                                    <option value="Health">Health</option>
                                                    <option value="Personal">Personal</option>
                                                    <option value="Education">Education</option>
                                                    <option value="Technology">Technology</option>
                                                    <option value="Entertainment">Entertainment</option>
                                                    <option value="Family">Family</option>
                                                    <option value="Others">Others</option>
                                                </>
                                            )}
                                        </select>
                                    </div>

                                    {/* Amount Input */}
                                    <div className='space-y-2'>
                                        <label className="text-xs font-black uppercase tracking-widest text-base-content/50 ml-1">Amount</label>
                                        <div className='relative'>
                                            <FiDollarSign className='absolute left-4 top-1/2 -translate-y-1/2 text-emerald-600' />
                                            <input
                                                type="number"
                                                name='amount'
                                                placeholder='0.00'
                                                className={`w-full p-4 pl-10 rounded-2xl bg-base-200 border outline-none text-base-content font-bold transition-all ${errAmount ? 'border-red-500' : 'border-base-content/5 focus:border-emerald-500/50'}`}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className='space-y-2'>
                                    <label className="text-xs font-black uppercase tracking-widest text-base-content/50 ml-1">Description</label>
                                    <div className='relative'>
                                        <FiEdit3 className='absolute left-4 top-5 text-base-content/30' />
                                        <textarea
                                            name='description'
                                            rows="3"
                                            placeholder={`Describe this ${bool}...`}
                                            className={`w-full p-4 pl-10 rounded-2xl bg-base-200 border outline-none text-base-content transition-all ${errDes ? 'border-red-500' : 'border-base-content/5 focus:border-emerald-500/50'}`}
                                        ></textarea>
                                    </div>
                                </div>

                                {/* Date */}
                                <div className='space-y-2'>
                                    <label className="text-xs font-black uppercase tracking-widest text-base-content/50 ml-1">Transaction Date</label>
                                    <div className='relative'>
                                        <FiCalendar className='absolute left-4 top-1/2 -translate-y-1/2 text-base-content/30' />
                                        <input
                                            type="date"
                                            name="date"
                                            className={`w-full p-4 pl-10 rounded-2xl bg-base-200 border outline-none text-base-content transition-all ${errDate ? 'border-red-500' : 'border-base-content/5 focus:border-emerald-500/50'}`}
                                        />
                                    </div>
                                </div>

                                {/* User Info (Read Only) */}
                                <div className='grid grid-cols-2 gap-4 opacity-50'>
                                    <div className='space-y-1'>
                                        <label className='text-[10px] font-bold uppercase ml-1 tracking-widest'>Owner</label>
                                        <input type="text" name='names' readOnly defaultValue={user?.displayName} className='w-full p-3 rounded-xl bg-base-200 text-xs border border-transparent' />
                                    </div>
                                    <div className='space-y-1'>
                                        <label className='text-[10px] font-bold uppercase ml-1 tracking-widest'>Email</label>
                                        <input type="text" name='email' readOnly defaultValue={user?.email} className='w-full p-3 rounded-xl bg-base-200 text-xs border border-transparent' />
                                    </div>
                                </div>

                                <button 
                                    className={`w-full py-5 rounded-[1.5rem] font-black text-lg transition-all shadow-xl active:scale-[0.98] flex items-center justify-center gap-3 ${bool === 'income' ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20' : 'bg-red-600 hover:bg-red-500 text-white shadow-red-600/20'}`}
                                >
                                    {loading ? 'Processing Transaction...' : 'Confirm Transaction'}
                                    {loading && <span className='loading loading-spinner loading-sm'></span>}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AddTransaction;