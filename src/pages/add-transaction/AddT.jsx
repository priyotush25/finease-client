import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { AuthContext } from '../../provider/AuthProvider';
import Container from '../../components/layout/Container';
import { FaMoneyBillWave, FaShoppingCart, FaCalendarAlt, FaUser } from 'react-icons/fa';

const AddTransaction = () => {
  const [type, setType] = useState('income'); // 'income' or 'expense'
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { user } = useContext(AuthContext);

  const incomeCategories = [
    'Salary',
    'Freelance',
    'Side Business',
    'Investment',
    'Ride Sharing',
    'Pocket Money',
    'Other Income',
  ];

  const expenseCategories = [
    'Food & Dining',
    'Transportation',
    'Home Rent',
    'Utilities',
    'Health & Fitness',
    'Entertainment',
    'Shopping',
    'Education',
    'Family',
    'Technology',
    'Others',
  ];

  const validateForm = (formData) => {
    const newErrors = {};
    if (!formData.amount || formData.amount <= 0)
      newErrors.amount = 'Please enter a valid amount';
    if (!formData.description.trim())
      newErrors.description = 'Description is required';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (formData.category.includes('Choose'))
      newErrors.category = 'Please select a category';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      type: type === 'income' ? 'Income' : 'Expense',
      category: form.category.value,
      amount: Number(form.amount.value),
      description: form.description.value.trim(),
      date: form.date.value,
      email: user?.email || '',
      name: user?.displayName || 'Anonymous',
    };

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please fix the highlighted fields');
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/my-transaction`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to add transaction');
      }

      await res.json();
      form.reset();
      form.category.value = `Choose your ${type} category`; // Reset select
      toast.success('Transaction added successfully!');
    } catch (err) {
      toast.error(err.message || 'Failed to add transaction. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-base-100 via-emerald-50/50 to-lime-50/30 py-16 px-4">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-base-100 rounded-3xl shadow-2xl overflow-hidden border border-base-300">
            {/* Left Side - Visual */}
            <div className="hidden lg:flex flex-col items-center justify-center p-12 bg-gradient-to-br from-primary via-emerald-600 to-lime-600 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                  className="mb-8"
                >
                  <FaMoneyBillWave className="text-8xl mx-auto opacity-90" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-4">Track Every Move</h3>
                <p className="text-lg opacity-90 max-w-sm">
                  Add income and expenses effortlessly. Watch your financial story unfold with clarity.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Right Side - Form */}
            <div className="p-8 lg:p-14">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-extrabold mb-3">
                  Add New{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
                    Transaction
                  </span>
                </h2>
                <p className="text-base-content/60">Keep your finances organized and up to date</p>
              </div>

              {/* Type Toggle */}
              <div className="flex justify-center mb-10">
                <div className="inline-flex bg-base-200 rounded-full p-1.5 shadow-lg">
                  <button
                    type="button"
                    onClick={() => setType('income')}
                    className={`px-10 py-3 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 ${
                      type === 'income'
                        ? 'bg-gradient-to-r from-primary to-emerald-600 text-white shadow-md'
                        : 'text-base-content/70 hover:text-base-content'
                    }`}
                  >
                    <FaMoneyBillWave />
                    Income
                  </button>
                  <button
                    type="button"
                    onClick={() => setType('expense')}
                    className={`px-10 py-3 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 ${
                      type === 'expense'
                        ? 'bg-gradient-to-r from-primary to-emerald-600 text-white shadow-md'
                        : 'text-base-content/70 hover:text-base-content'
                    }`}
                  >
                    <FaShoppingCart />
                    Expense
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-7">
                {/* Category */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold text-base-content/80">
                      {type === 'income' ? 'Income' : 'Expense'} Category
                    </span>
                  </label>
                  <select
                    name="category"
                    defaultValue={`Choose your ${type} category`}
                    className={`select select-bordered w-full rounded-2xl h-14 text-base bg-base-100 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary ${
                      errors.category ? 'border-red-500' : ''
                    }`}
                  >
                    <option disabled value={`Choose your ${type} category`}>
                      Choose a category
                    </option>
                    {(type === 'income' ? incomeCategories : expenseCategories).map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="text-red-500 text-sm mt-2">{errors.category}</p>
                  )}
                </div>

                {/* Amount */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold text-base-content/80">Amount</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-5 flex items-center text-xl text-base-content/50 pointer-events-none">
                      $
                    </span>
                    <input
                      type="number"
                      name="amount"
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                      className={`input input-bordered w-full pl-10 rounded-2xl h-14 text-lg bg-base-100 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary ${
                        errors.amount ? 'border-red-500' : ''
                      }`}
                    />
                  </div>
                  {errors.amount && (
                    <p className="text-red-500 text-sm mt-2">{errors.amount}</p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold text-base-content/80">Description</span>
                  </label>
                  <textarea
                    name="description"
                    rows="3"
                    placeholder="e.g., Monthly salary, Grocery shopping..."
                    className={`textarea textarea-bordered w-full rounded-2xl bg-base-100 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary ${
                      errors.description ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-2">{errors.description}</p>
                  )}
                </div>

                {/* Date */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold text-base-content/80">Date</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                      <FaCalendarAlt className="text-base-content/40" />
                    </div>
                    <input
                      type="date"
                      name="date"
                      className={`input input-bordered w-full rounded-2xl h-14 bg-base-100 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary ${
                        errors.date ? 'border-red-500' : ''
                      }`}
                    />
                  </div>
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-2">{errors.date}</p>
                  )}
                </div>

                {/* User Info (Read-only) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                  <div>
                    <label className="label">
                      <span className="label-text font-medium flex items-center gap-2">
                        <FaUser className="text-sm" /> Email
                      </span>
                    </label>
                    <input
                      type="text"
                      value={user?.email || 'Not logged in'}
                      readOnly
                      className="input input-bordered w-full rounded-xl bg-base-200 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text font-medium">Name</span>
                    </label>
                    <input
                      type="text"
                      value={user?.displayName || 'Anonymous'}
                      readOnly
                      className="input input-bordered w-full rounded-xl bg-base-200 cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-block h-14 text-lg font-bold rounded-2xl bg-gradient-to-r from-primary via-emerald-600 to-lime-600 hover:from-primary/90 hover:via-emerald-700 hover:to-lime-700 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-3">
                      <span className="loading loading-spinner loading-md"></span>
                      Adding Transaction...
                    </span>
                  ) : (
                    'Add Transaction'
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AddTransaction;