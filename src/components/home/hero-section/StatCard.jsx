import React from 'react';

const StatCard = ({ title, amount, change, changeColor }) => {
    return (
        <div className="bg-accent-content shadow-md rounded-2xl p-5 w-full max-w-xs text-center">
            <p className="text-gray-500 text-sm">{title}</p>
            <h2 className="text-2xl text-secondary font-semibold mt-1">৳{amount}</h2>
            <p className={`text-sm mt-2 ${changeColor}`}>{change}</p>
        </div>
    );
};

export default StatCard;