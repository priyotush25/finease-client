import React, { use, useState } from 'react';
import {
    FiUser,
    FiHeart,
    FiStar,
    FiSettings,
    FiBell,
    FiLogOut,
} from "react-icons/fi";
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';
import userProfile from '../../assets/user.png'

const UserProfile = () => {
    const [bool, setBool] = useState(true)
    const { user, updateUserProfile, setUser, setLoading, loading } = use(AuthContext)

    const handleUpdateProfile = (e) => {
            const name = e.target.name.value;
            const photo = e.target.photoURL.value;
            
            
            e.target.reset();
    
            updateUserProfile({ displayName: name, photoURL: photo })
                .then(() => {
                    if (!photo) {
                        setUser({ ...user, displayName: name })
                        toast.success('Successfully updated your name')
                        setLoading(false)
                        return
                    }
                    setUser({ ...user, displayName: name, photoURL: photo });
                    toast.success('Successfully updated')
                    setLoading(false)
    
                })
                .catch(error => {
                    if (error.code === 'auth/invalid-profile-attribute') {
                        toast.success('Your URL is too long!')
                        setLoading(false)
                    }
                    setUser(user)
                    setLoading(false)
                })
    
        }
    
    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        < main className="flex-1 flex flex-col py-5 px-6 space-y-10" >
            <div className="flex w-full flex-col md:flex-row bg-base-100 shadow-md rounded-2xl justify-between items-center px-10 py-5">
                <div className="relative w-24 h-24 md:w-28 md:h-28">
                    <img
                        src={user?.photoURL ? user?.photoURL : userProfile}
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover border-4 border-orange-400"
                    />
                    <div className="absolute bottom-1 right-1 bg-orange-500 text-white rounded-full p-1">
                        <FiUser size={14} />
                    </div>
                </div>
                <div className='text-end'>
                    <h2 className="text-xl md:text-2xl font-semibold mt-4">
                        {user?.displayName}
                    </h2>
                    <p>
                        {user?.email}
                    </p>
                </div>
            </div>

            <form onSubmit={handleUpdateProfile} className='w-full bg-base-100 shadow-md rounded-2xl justify-between items-center px-10 py-10 text-secondary'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Md. Rakiul"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500"
                            defaultValue={user?.displayName}
                            name='name'
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="rakibulxyz@gmail.com"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500 cursor-no-drop"
                            defaultValue={user?.email}
                            readOnly
                            title="You can't change email address"
                        />
                    </div>
                </div>

                <div className='mt-4'>
                    <label className="block text-sm mb-1">Photo-URL</label>
                    <input
                        type="text"
                        placeholder="https://..."
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500"
                        name='photoURL'
                    />
                </div>

                <div className="flex justify-center mt-8">
                    <button className="bg-orange-500 text-white font-semibold py-2 px-8 rounded-lg hover:bg-orange-600 transition">
                        Save Changes
                    </button>
                </div>
            </form>


        </main >
    );
};

export default UserProfile;