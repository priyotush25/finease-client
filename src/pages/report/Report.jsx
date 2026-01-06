import React from 'react';
import Container from '../../components/layout/Container';
import PieChartExample from './PieChart';
import { useEffect } from 'react';
import { use } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useState } from 'react';
import Loader from '../../loader/Loader';

const Report = () => {
    const [infos, setInfos] = useState([])
    // const [categories, setCategories] = useState([])
    const [loader, setLoader] = useState(true)
    const { user } = use(AuthContext)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/my-transaction?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(result => result.json())
            .then(data => {
                setInfos(data)
                setLoader(false)
            })
    }, [])

    if (loader) {
        return <Loader />
    }


    // Expense
    const allExpenses = infos.filter(expense => expense.type === 'Expense');
    const categories = [...new Set(allExpenses.map(item => item.category))];

    const expenseData = categories.map((category) => ({
        name: category,
        value: 0, // replace with real expense amount later
    }));

    const updatedExpenseData = expenseData.map((item) => {
        const total = allExpenses
            .filter(exp => exp.category === item.name)
            .reduce((acc, curr) => acc + Number(curr.amount), 0);

        return { ...item, value: total };
    });

    // Income
    const allIncome = infos.filter(income => income.type === 'Income');
    const categoriesI = [...new Set(allIncome.map(item => item.category))];

    const incomeData = categoriesI.map((category) => ({
        name: category,
        value: 0, // replace with real expense amount later
    }));

    const updatedIncomeData = incomeData.map((item) => {
        const total = allIncome
            .filter(exp => exp.category === item.name)
            .reduce((acc, curr) => acc + Number(curr.amount), 0);

        return { ...item, value: total };
    });



    return (
        <section className='bg-neutral min-h-screen py-10'>
            <title>Reports | FinEase</title>
            <div className='max-w-7xl mx-auto'>

                <PieChartExample updatedExpenseData={updatedExpenseData} updatedIncomeData={updatedIncomeData} />

            </div>
        </section>
    );
};

export default Report;