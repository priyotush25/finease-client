import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { FiArrowUpRight, FiArrowDownLeft, FiCalendar, FiTrash2, FiEdit, FiMaximize2 } from 'react-icons/fi';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';

const Transactioncard = ({ info, infos, setInfos }) => {
    const { user } = useAuth(); // 🔑 Get current user
    const { type, category, amount, date, _id } = info;
    const isIncome = type.toLowerCase() === 'income';

    const onDelete = async () => {
        if (!user) {
            toast.error("Please login first!");
            return;
        }

        const result = await Swal.fire({
            title: "Are you sure?",
            text: "This transaction will be permanently removed.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#10b981",
            cancelButtonColor: "#ef4444",
            confirmButtonText: "Yes, delete it!",
            background: 'var(--fallback-b1, #fff)',
            color: 'var(--fallback-bc, #000)'
        });

        if (result.isConfirmed) {
            try {
                const token = await user.getIdToken(); // 🔑 Firebase token
                const res = await fetch(`${import.meta.env.VITE_API_URL}/my-transaction/${_id}`, {
                    method: 'DELETE',
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });

                if (!res.ok) {
                    throw new Error("Unauthorized or failed to delete transaction");
                }

                const data = await res.json();

                // Optional: if backend returns deletedCount
                if (data.deletedCount || data.success) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Transaction removed from your ledger.",
                        icon: "success",
                        confirmButtonColor: "#10b981"
                    });

                    const remainData = infos.filter(remain => remain._id !== _id);
                    setInfos(remainData);
                }

            } catch (error) {
                console.error(error);
                toast.error(error.message);
            }
        }
    };

    return (
        <div className="group bg-base-100 rounded-[2rem] p-6 w-full border border-base-content/5 shadow-sm hover:shadow-xl hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between">
            <div>
                {/* Header: Icon & Date */}
                <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl transition-colors ${
                        isIncome 
                        ? 'bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white' 
                        : 'bg-red-500/10 text-red-600 group-hover:bg-red-600 group-hover:text-white'
                    }`}>
                        {isIncome ? <FiArrowUpRight /> : <FiArrowDownLeft />}
                    </div>
                    <div className="flex items-center gap-1.5 text-base-content/40 text-xs font-bold uppercase tracking-wider">
                        <FiCalendar />
                        {date}
                    </div>
                </div>

                {/* Content: Category & Amount */}
                <div className="mb-6">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-base-content/30 mb-1">
                        {category}
                    </p>
                    <h3 className={`text-2xl font-black ${isIncome ? 'text-emerald-600' : 'text-red-500'}`}>
                        {isIncome ? '+' : '-'}{amount.toLocaleString()} <span className="text-sm font-medium opacity-60">BDT</span>
                    </h3>
                </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-base-content/5 gap-2">
                <Link
                    to={`/transaction-details/${_id}`}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-base-200 hover:bg-emerald-500 hover:text-white text-base-content/70 rounded-xl text-xs font-bold transition-all"
                >
                    <FiMaximize2 /> Details
                </Link>
                
                <Link
                    to={`/update/${_id}`}
                    className="w-10 h-10 flex items-center justify-center bg-base-200 hover:bg-amber-500 hover:text-white text-base-content/70 rounded-xl transition-all"
                    title="Update"
                >
                    <FiEdit size={16} />
                </Link>

                <button
                    onClick={onDelete}
                    className="w-10 h-10 flex items-center justify-center bg-base-200 hover:bg-red-500 hover:text-white text-base-content/70 rounded-xl transition-all cursor-pointer"
                    title="Delete"
                >
                    <FiTrash2 size={16} />
                </button>
            </div>
        </div>
    );
};

export default Transactioncard;
