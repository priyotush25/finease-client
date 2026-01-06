import React, { use, useEffect, useState } from 'react';
import Container from '../../components/layout/Container';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import Loader from '../../loader/Loader';

const Details = () => {
    const [sData, setSdata] = useState(null);
    const [loader, setLoader] = useState(true)
    const [infos, setInfos] = useState([])
    const { id } = useParams();
    const { user } = use(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/my-transaction/${id}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(result => {
                return result.json()
            })
            .then(data => {
                setSdata(data)
                setLoader(false)
            })
    }, [])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/my-transaction?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
        .then(result => result.json())
        .then(data => {
            setInfos(data)
        })
    }, [])

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
                fetch(`${import.meta.env.VITE_API_BASE_URL}/my-transaction/${id}`, {
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
                            navigate('/my-transaction')
                        }
                    })

            }
        });
    }

    if (loader) {
        return <Loader />
    }

    const { type, category, amount, date, description, _id } = sData;

    // Total amount
    const sameCate = infos.filter(cate => cate.category === category)
    
    const total = sameCate.reduce((acc, item) => acc + Number(item.amount), 0)

    return (
        <div>
            <section className='flex items-center py-5 lg:py-10 bg-neutral px-5 lg:px-7 xl:px-0 text-secondary'>
                <Container>
                    <div className='shadow-sm p-10 xl:px-52 rounded-xl bg-base-100 relative overflow-hidden'>
                        <div className='w-[200px] h-[200px] bg-accent rounded-full absolute -top-16 -left-28 '></div>
                        <div className='w-[170px] h-[40px] bg-accent rounded-2xl absolute -right-5 -bottom-5'></div>
                        <div className='space-y-3'>
                            <h2 className='text-2xl lg:text-4xl text-primary text-center font-semibold'>{type}</h2>
                            <div className='flex justify-between items-center flex-col md:flex-row'>
                                <p className='text-xl md:text-2xl font-semibold'>Amount of {type} : {amount} BDT</p>
                                <p className='text-lg md:text-xl'>Date of {type} : {date}</p>
                            </div>
                            <p className='text-2xl font-semibold'>{type} category "{category}"</p>
                            <div>
                                <h2 className='text-lg md:text-xl'>Description</h2>
                                <p className='text-base text-gray-800'>
                                    {description}
                                </p>
                            </div>
                            <div>
                                <p className='font-semibold'>Total {type} {type === 'Income' ? 'by' : 'for'} {category} : <b>{total}</b> BDT</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex flex-col gap-4 md:gap-0 md:flex-row md:space-x-2'>
                                    <Link
                                        to={`/update/${_id}`}
                                        className="px-4 py-1.5 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm transition"
                                    >
                                        Update
                                    </Link>
                                    <button
                                        onClick={onDelete}
                                        className="cursor-pointer px-4 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm transition"
                                    >
                                        Delete
                                    </button>
                                </div>
                                <Link className='bg-orange-500 text-white text-sm px-5 py-2 rounded-xl hover:bg-orange-400 transition' to="/my-transaction">
                                    Back
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Details;