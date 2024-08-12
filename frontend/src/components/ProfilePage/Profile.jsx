// Profile.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../Navbar'; // Adjust the path if necessary

const Profile = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(1);

    const getCookieValue = (name) => {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.startsWith(name + '=')) {
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    };

    const token = getCookieValue('journal_token');

    const fetchData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}journal/getUserJournal`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setData(response.data.message);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        fetchData();
    }, [flag]);

    const fetchUser = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}users/getUser`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setUserName(res.data.message.username);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const handleEdit = (journal_id) => {
        navigate(`/addjournals/${journal_id}`);
    };

    const handleDelete = async (userName, title) => {
        try {
            await axios.post(`${import.meta.env.VITE_BASE_URL}journal/deleteJournal`, { userName, title }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            toast.success('Deleted Successfully');
            setFlag(!flag);
        } catch (err) {
            toast.error('Deletion failed');
            console.log(err.message);
        }
    };

    return (
        <>
            
            <div className='w-full'>
                <div className='flex flex-col gap-x-5 my-5  bg-[#fecaca]'>
                    <div className='w-[95%] rounded-xl'>
                        <div className='h-[20rem] flex flex-row items-center justify-center bg-[rgb(254,202,202)]'>
                            <div className='hidden lg:block rounded-full'>
                                <img src={'https://w7.pngwing.com/pngs/952/451/png-transparent-poland-computer-icons-curt-manufacturing-llc-information-boso-ale-w-ostrogach-my-account-icon-miscellaneous-company-monochrome-thumbnail.png'} className='h-[15rem] p-4 rounded-[100%]' />
                            </div>
                            <div className='flex flex-col ml-5'>
                                <p className='text-7xl'>{userName}</p>
                                <div className='py-2'><p className='0'>@{userName}</p></div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default Profile
