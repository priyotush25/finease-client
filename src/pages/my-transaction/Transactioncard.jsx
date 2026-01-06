import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const Transactioncard = ({ info, infos, setInfos }) => {
    const { type, category, amount, date, _id } = info;

    const onDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_BASE_URL}/my-transaction/${_id}`, {
                    method: 'DELETE'
                })
                    .then(result => result.json())
                    .then(data => {
                        
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your transaction has been deleted.",
                                icon: "success"
                            });
                            const remainData = infos.filter(remain => remain._id !== _id);
                            setInfos(remainData)
                        }
                    })
            }
        });
    }

    return (
        <>
            <div className="bg-base-100 rounded-xl shadow-md p-5 w-full transition hover:shadow-lg text-secondary border border-accent hover:border-primary">
                <div className="flex justify-between items-start mb-4 text-secondary">
                    <h3
                        className={`text-lg font-semibold`}
                    >
                        {type}
                    </h3>
                    <span className="text-sm">{date}</span>
                </div>

                <div className="space-y-2 mb-4">
                    <p>
                        <span className="font-medium">Category:</span> {category}
                    </p>
                    <p>
                        <span className="font-medium">Amount:</span> {amount} BDT
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                    <a
                        className="px-4 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm transition"
                        href={`/transaction-details/${_id}`}
                    >
                        View Details
                    </a>
                    <Link
                        to={`/update/${_id}`}
                        className="px-4 py-1.5 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm transition"
                    >
                        Update
                    </Link>
                    <button
                        onClick={onDelete}
                        className="px-4 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm transition cursor-pointer"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
};

export default Transactioncard;