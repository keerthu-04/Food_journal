/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Journals = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);

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

  const handleSearch = () => {
    const value = search.toLowerCase();
    if (value === '') {
      setFilteredData(data);
      return;
    }
    const filtered = data.filter(
      item =>
        item.title.toLowerCase().includes(value) ||
        item.description.toLowerCase().includes(value) ||
        item.author.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
    console.log(filteredData);
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = getCookieValue('journal_token');
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}journal/getJournals`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setData(response.data.journals);
      console.log(response.data.journals);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <>
    <br></br>
    <br></br>
      <div className='mb-[2rem] flex justify-center'>
        <span className='text-4xl py-2 px-4 bg-red-400 rounded-xl shadow-xl'>Journals</span>
      </div>
      <div className='flex justify-center mb-8'>
        <div className='flex items-center bg-white rounded-full shadow-xl'>
          <input
            type='text'
            placeholder='Search Journal posts....'
            className='rounded-full py-2 px-4 w-[300px] sm:w-[500px] md:w-[700px] bg-[#f3f4f5] border-0 focus:outline-none'
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className='ml-2 bg-red-400 text-white rounded-full px-4 py-2'
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8'>
        {filteredData.map((journal, index) => (
          <Link
            to={`/${journal._id}`}
            key={index}
            className='flex flex-col bg-[#fecaca] rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 duration-300'
          >
            <img src={journal.image} alt='journal' className='h-48 w-full object-cover' />
            <div className='p-6'>
              <h2 className='text-2xl font-bold mb-2'>{journal.title}</h2>
              <div className='flex justify-between text-sm text-gray-700 mb-4'>
                <span>@{journal.author}</span>
                <span>{journal.date.split('T')[0]}</span>
              </div>
              <p className='text-gray-800'>{journal.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Journals;
