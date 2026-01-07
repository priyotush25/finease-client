import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { BiPieChartAlt } from "react-icons/bi";

// FinEase Modern Palette
const COLORS = ["#059669", "#10B981", "#34D399", "#6EE7B7", "#A7F3D0", "#ECFDF5"];

const PieChartExample = ({ updatedExpenseData, updatedIncomeData }) => {
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-emerald-950 text-white p-4 rounded-2xl shadow-2xl border border-emerald-500/20">
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">{payload[0].name}</p>
                    <p className="text-lg font-black">{payload[0].value.toLocaleString()} BDT</p>
                </div>
            );
        }
        return null;
    };

    const renderChart = (data, title, isIncome) => (
        <div className="w-full h-[500px] bg-base-100 p-8 rounded-[2.5rem] border border-base-content/5 shadow-sm relative overflow-hidden group">
            {/* Background Accent */}
            <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[100px] opacity-10 ${isIncome ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
            
            <h2 className="text-xl font-black text-base-content mb-2 relative z-10">{title}</h2>
            <div className="w-16 h-1 bg-emerald-500 rounded-full mb-8"></div>
            
            {data.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center opacity-30">
                  <BiPieChartAlt size={48} className="mb-4 text-emerald-600" /> {/* ✅ Fixed */}
                    <p className="font-bold tracking-widest uppercase text-xs">No Data Available</p>
                </div>
            ) : (
                <ResponsiveContainer width="100%" height="80%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={80} // Donut style
                            outerRadius={120}
                            paddingAngle={5}
                            stroke="none"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className="hover:opacity-80 transition-opacity" />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend 
                            verticalAlign="bottom" 
                            iconType="circle" 
                            formatter={(value) => <span className="text-sm font-bold text-base-content/60 px-2 uppercase tracking-tighter">{value}</span>}
                        />
                    </PieChart>
                </ResponsiveContainer>
            )}
        </div>
    );

    return (
        <div className="grid lg:grid-cols-2 gap-8">
            {renderChart(updatedIncomeData, "Income Distribution", true)}
            {renderChart(updatedExpenseData, "Spending Patterns", false)}
        </div>
    );
};

export default PieChartExample;
