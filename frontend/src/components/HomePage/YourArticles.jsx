import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { TbEdit } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from 'react-toastify'; // Ensure you have react-toastify installed and set up

const YourArticles = () => {
  const [userName, setUserName] = useState('');
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(1);
  const navigate = useNavigate();

  function getCookieValue(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

  const token = getCookieValue('journal_token');

  const fetchData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}journal/getUserJournal`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
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

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}users/getUser`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setUserName(res.data.message.username);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (journal_id) => {
    navigate(`/addjournals/${journal_id}`);
  };

  const handleDelete = async (userName, title) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}journal/deleteJournal`,
        { userName, title },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      toast.success('Deleted Successfully');
      setFlag(!flag);
    } catch (err) {
      toast.error('Deletion failed');
      console.log(err.message);
    }
  };

  return (
    <div className='mt-10'>
      <p className='text-5xl shadow-lg py-4 rounded-xl bg-red-400 text-center text-black'>Your Articles</p>

      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data.map((journal, index) => (
          <div
            key={index}
            className='flex flex-col rounded-lg shadow-lg bg-[#fecaca] overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#f9c2c2]'
          >
            <img
              src={journal.image}
              alt='journal'
              className='h-48 w-full object-cover'
            />
            <div className='p-6 flex flex-col justify-between'>
              <div>
                <Link to={`/${journal._id}`}>
                  <h2 className='text-xl font-bold text-gray-900'>{journal.title}</h2>
                  <div className='flex justify-between mt-2 text-gray-500'>
                    <span>@{journal.author}</span>
                    <span>Date: {(journal.date).split("T")[0]}</span>
                  </div>
                  <p className='mt-3 text-gray-700 overflow-y-auto h-24'>
                    {journal.description}
                  </p>
                </Link>
              </div>
              <div className='flex justify-between mt-4 gap-x-4'>
                <button className='p-2 text-2xl bg-red-400 text-white rounded-md hover:bg-red-500' onClick={() => { handleEdit(journal._id) }}>
                  <TbEdit />
                </button>
                <button className='p-2 text-2xl bg-cyan-200 text-white rounded-md hover:bg-cyan-300' onClick={() => { handleDelete(journal.userName, journal.title) }}>
                  <MdDeleteOutline />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourArticles;
