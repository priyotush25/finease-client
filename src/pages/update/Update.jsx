import React, { useEffect, useState } from 'react';
import Container from '../../components/layout/Container';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import toast from 'react-hot-toast';
import { use } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Loader from '../../loader/Loader';

const Update = () => {
    const [bool, setBool] = useState('')
    const [info, setInfo] = useState({});
    const [loader, setLoader] = useState(true)
    const [loading, setLoading] = useState(false)
    const [cat, setCat] = useState("");
    const { id } = useParams();
    const { user } = use(AuthContext);
    const navigate = useNavigate();

    const loaderTrueFalse = () => {
        setLoading(true)
    }

    useEffect(() => {
        setLoader(true)
        fetch(`${import.meta.env.VITE_API_BASE_URL}/my-transaction/${id}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(result => {
                return result.json()
            })
            .then(data => {
                setInfo(data)
                setCat(data.category);
                setLoader(false)
            }).finally(() => setLoader(false))
    }, [])
    const { type, category, amount, date, description, _id } = info;

    useEffect(() => {
        setBool(type)
        setLoader(false)
    }, [type])



    const handleIncome = (e) => {
        e.preventDefault();
        const incomeData = {
            type: "Income",
            category: e.target.category.value,
            amount: e.target.amount.value,
            description: e.target.description.value,
            date: e.target.date.value,
        }
        

        loaderTrueFalse();

        fetch(`${import.meta.env.VITE_API_BASE_URL}/my-transaction/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(incomeData)
        })
            .then(result => result.json())
            .then(data => {
                
                toast.success('Successfully Updated!')
                navigate(`/transaction-details/${id}`)
                setLoading(false)
            })
            .catch(err => {
                

            })

    }

    const handleExpense = (e) => {
        e.preventDefault();
        const expenseData = {
            type: 'Expense',
            category: e.target.category.value,
            amount: e.target.amount.value,
            description: e.target.description.value,
            date: e.target.date.value
        }


        loaderTrueFalse();

        fetch(`${import.meta.env.VITE_API_BASE_URL}/my-transaction/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(expenseData)
        })
            .then(result => {
                return result.json()
            })
            .then(data => {
                
                toast.success('Successfully Updated!')
                navigate(`/transaction-details/${id}`)
                setLoading(false)
            })
            .catch(err => {
                
            })

    }

    if (loader) {
        return <Loader />
    }
    
    return (
        <section className='flex items-center py-10 min-h-screen bg-neutral text-black px-7 xl:px-0'>
            <Container>
                <div className='flex flex-col md:flex-row justify-center items-center shadow-sm p-5 lg:p-10 xl:px-52 rounded-xl bg-base-100 relative overflow-hidden'>
                    <div className='w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] bg-accent rounded-full absolute -top-12 -left-16 lg:-top-16 lg:-left-28 '></div>
                    <div className='w-[170px] h-[40px] bg-accent rounded-2xl absolute -right-5 -bottom-5'></div>
                    <div className='justify-center items-center flex-col space-y-4 hidden lg:flex'>

                    </div>

                    <div className="w-full lg:w-[400px]">
                        {/* <h2 className='font-semibold text-xl lg:text-3xl mb-8 text-center'>Choose Your <span className='text-primary'>Transaction</span></h2> */}
                        <div className='flex justify-center text-secondary'>
                            <button className={`px-10 py-2 border-2 border-primary border-r-0 font-semibold rounded-tl-lg rounded-bl-lg cursor-pointer ${bool === 'Income' ? 'bg-accent' : 'bg-base-100'}`} onClick={() => setBool('Income')}>Income</button>
                            <button className={`px-10 py-2 border-2 border-primary border-l-0 font-semibold rounded-tr-lg rounded-br-lg cursor-pointer ${bool === 'Expense' ? 'bg-accent' : 'bg-base-100'}`} onClick={() => setBool('Expense')}>Expense</button>
                        </div>
                        {
                            bool === 'Income' ? (
                                <div className='mt-5 text-secondary'>
                                    <h2 className='font-semibold text-lg lg:text-3xl mb-8 text-center'>Update Your <span className='text-primary'>Income</span></h2>
                                    <form onSubmit={handleIncome} className='space-y-3 text-secondary'>

                                        <label htmlFor="category" className="block text-sm font-medium mb-1">Select Income Category</label>
                                        <select value={cat}
                                            onChange={(e) => setCat(e.target.value)} id="category"
                                            className="w-full px-3 py-2 border border-accent rounded-lg bg-white text-gray-700 focus:outline-none focus:border-primary"
                                            name='category'>
                                            <option value="Salary">Salary</option>
                                            <option value="Ride Sharing">Ride Sharing</option>
                                            <option value="Pocket Money">Pocket Money</option>
                                            <option value="Side Business">Side Business</option>
                                        </select>

                                        <label
                                            htmlFor="amt" className="block text-sm font-medium mb-1">Amount</label>
                                        <input
                                            type="number"
                                            id="amt"
                                            className="w-full px-3 py-2 border border-accent rounded-lg bg-white text-gray-700 focus:outline-none focus:border-primary"
                                            placeholder='Amount'
                                            name='amount'
                                            defaultValue={amount}
                                        />

                                        <label htmlFor="des" className="block text-sm font-medium mb-1">Description</label>
                                        <textarea
                                            id="des"
                                            cols="30"
                                            rows="4"
                                            className="w-full px-3 py-2 border border-accent rounded-lg bg-white text-gray-700 focus:outline-none focus:border-primary"
                                            placeholder='Write Your Income Description...'
                                            name='description'
                                            defaultValue={description}></textarea>

                                        <label htmlFor="date" className="block text-sm font-medium mb-1">Select Date</label>
                                        <input
                                            type="date"
                                            id="date"
                                            className="w-full px-3 py-2 border border-accent rounded-lg text-gray-700 bg-white focus:outline-none focus:border-primary"
                                            name="date"
                                            defaultValue={date}
                                        />

                                        <button className='btn p-5 rounded-lg w-full hover:bg-primary border-none shadow-none duration-300 text-lg bg-[#ff6900de] font-semibold transition'>
                                            Update Transaction{loading ? <span className='text-xl animate-pulse'>. . .</span> : ''}
                                        </button>
                                    </form>
                                </div>
                            ) : (
                                <div className='mt-5 text-secondary'>
                                    <h2 className='font-semibold text-lg lg:text-3xl mb-8 text-center'>Update Your <span className='text-primary'>Expense</span></h2>
                                    <form onSubmit={handleExpense} className='space-y-3'>

                                        <label htmlFor="category" className="block text-sm font-medium mb-1">Select Expense Category</label>
                                        <select value={cat}
                                            onChange={(e) => setCat(e.target.value)} id="category"
                                            className="w-full px-3 py-2 border border-accent rounded-lg bg-white text-gray-700 focus:outline-none focus:border-primary" name='category'>
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
                                        </select>

                                        <label htmlFor="amt" className="block text-sm font-medium mb-1">Amount</label>
                                        <input
                                            type="number"
                                            id="amt"
                                            className="w-full px-3 py-2 border border-accent rounded-lg bg-white text-gray-700 focus:outline-none focus:border-primary"
                                            placeholder='Amount'
                                            name='amount'
                                            defaultValue={amount}
                                        />

                                        <label htmlFor="des" className="block text-sm font-medium mb-1">Description</label>
                                        <textarea
                                            id="des"
                                            cols="30"
                                            rows="4"
                                            className="w-full px-3 py-2 border border-accent rounded-lg bg-white text-gray-700 focus:outline-none focus:border-primary"
                                            placeholder='Write Your Income Description...'
                                            name='description'
                                            defaultValue={description} ></textarea>

                                        <label htmlFor="date" className="block text-sm font-medium mb-1">Select Date</label>
                                        <input
                                            type="date"
                                            id="date"
                                            className="w-full px-3 py-2 border border-accent rounded-lg text-gray-700 bg-white focus:outline-none focus:border-primary"
                                            name="date"
                                            defaultValue={date}
                                        />

                                        <button className='btn p-5 rounded-lg w-full hover:bg-primary border-none shadow-none duration-300 text-lg bg-[#ff6900de] font-semibold  transition'>
                                            Update Transaction{loading ? <span className='text-xl animate-pulse'>. . .</span> : ''}
                                        </button>
                                    </form>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Update;