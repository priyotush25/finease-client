import React from 'react';
import { FiUser, FiCamera, FiMail, FiCheckCircle, FiShield, FiSettings } from "react-icons/fi";
import toast from 'react-hot-toast';
import userProfile from '../../assets/user.png'
import useAuth from '../../Hooks/useAuth';
import Loader from '../../Components/Loading/Loader';

const UserProfile = () => {
    const { user, updateUserProfile, setUser, setLoading, loading } = useAuth();

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photoURL.value;
        
        setLoading(true);
        updateUserProfile({ displayName: name, photoURL: photo })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photo || user.photoURL });
                toast.success('Profile updated successfully!');
                setLoading(false);
            })
            .catch(error => {
                toast.error(error.message);
                setLoading(false);
            });
    };

    if (loading) return <Loader />;

    return (
        <main className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
            {/* Header Member Card */}
            <div className="bg-emerald-950 rounded-[2.5rem] p-10 overflow-hidden text-white shadow-2xl relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] -mr-20 -mt-20"></div>
                
                <div className="relative flex flex-col md:flex-row items-center gap-10">
                    <div className="relative group">
                        <div className="w-40 h-40 rounded-[2.5rem] overflow-hidden border-4 border-emerald-500/30 p-1 bg-white/5 transition-transform group-hover:scale-105 duration-500">
                            <img
                                src={user?.photoURL || userProfile}
                                alt="Profile"
                                className="w-full h-full rounded-[2.2rem] object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-emerald-950 rounded-2xl p-3 shadow-xl">
                            <FiShield size={20} />
                        </div>
                    </div>

                    <div className='text-center md:text-left'>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-widest border border-emerald-500/10 mb-4">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Active Account
                        </div>
                        <h2 className="text-4xl font-black mb-2 leading-tight">
                            {user?.displayName || "FinEase User"}
                        </h2>
                        <p className="text-emerald-100/50 font-medium text-lg flex items-center justify-center md:justify-start gap-2">
                            <FiMail className="text-emerald-500" /> {user?.email}
                        </p>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className='bg-base-100 rounded-[2.5rem] border border-base-content/5 shadow-sm overflow-hidden'>
                <div className="p-8 md:p-12">
                    <div className="flex items-center justify-between mb-10">
                        <h3 className="text-2xl font-black text-base-content">
                            Account <span className="text-emerald-600 font-normal">Settings</span>
                        </h3>
                        <FiSettings className="text-emerald-600 text-2xl" />
                    </div>

                    <form onSubmit={handleUpdateProfile} className='space-y-8'>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-xs font-black uppercase tracking-[0.2em] text-base-content/40 ml-1">Display Name</label>
                                <div className="relative">
                                    <FiUser className="absolute left-5 top-1/2 -translate-y-1/2 text-emerald-600" />
                                    <input
                                        type="text"
                                        className="w-full p-5 pl-14 rounded-3xl bg-base-200 border-2 border-transparent focus:border-emerald-500/30 focus:bg-base-100 outline-none transition-all font-bold text-base-content"
                                        defaultValue={user?.displayName}
                                        name='name'
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-black uppercase tracking-[0.2em] text-base-content/40 ml-1">Email Address</label>
                                <div className="relative">
                                    <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-base-content/20" />
                                    <input
                                        type="email"
                                        className="w-full p-5 pl-14 rounded-3xl bg-base-200/50 border-2 border-transparent text-base-content/30 cursor-not-allowed font-medium"
                                        defaultValue={user?.email}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='space-y-3'>
                            <label className="text-xs font-black uppercase tracking-[0.2em] text-base-content/40 ml-1">Avatar Image URL</label>
                            <div className="relative">
                                <FiCamera className="absolute left-5 top-1/2 -translate-y-1/2 text-base-content/30" />
                                <input
                                    type="text"
                                    className="w-full p-5 pl-14 rounded-3xl bg-base-200 border-2 border-transparent focus:border-emerald-500/30 focus:bg-base-100 outline-none transition-all font-medium text-base-content"
                                    placeholder="https://example.com/photo.jpg"
                                    defaultValue={user?.photoURL}
                                    name='photoURL'
                                />
                            </div>
                        </div>

                        <div className="pt-6 border-t border-base-content/5 flex justify-end">
                            <button className="w-full md:w-auto px-12 py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-[1.5rem] shadow-xl shadow-emerald-600/20 active:scale-[0.98] transition-all">
                                Update My Profile
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default UserProfile;