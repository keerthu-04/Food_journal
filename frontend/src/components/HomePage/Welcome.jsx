// import React from 'react';
// import { TypeAnimation } from 'react-type-animation';
// import { useNavigate } from 'react-router';
// import'./Cardcarousel.css'
// import indianImage from '../../assets/Images/indian.png';
// import chineseImage from '../../assets/Images/chinese.png';
// import continentalImage from '../../assets/Images/continental.png';
// import arabicImage from '../../assets/Images/arabic.png';
// import italyImage from '../../assets/Images/italy.png';
// import frenchImage from '../../assets/Images/french.png';
// import koreanImage from '../../assets/Images/korean.png';
// import thaiImage from '../../assets/Images/thai.png';

// const Welcome = () => {
//   const navigate = useNavigate();
//   const toExplore = () => {
//     navigate('/journals');
//   };

//   const cards = [
//     { id: 1, title: 'Indian', imageUrl: indianImage },
//     { id: 2, title: 'Chinese', imageUrl: chineseImage },
//     { id: 3, title: 'Continental', imageUrl: continentalImage },
//     { id: 4, title: 'Arabic', imageUrl: arabicImage },
//     { id: 5, title: 'Italy', imageUrl: italyImage },
//     { id: 6, title: 'French', imageUrl: frenchImage },
//     { id: 7, title: 'Korean', imageUrl: koreanImage },
//     { id: 8, title: 'Thai', imageUrl: thaiImage },

//   ];

//   return (
//     <section className='h-auto mt-20'>
//       <div className='h-full flex justify-center items-center relative pb-10'>
//         <div className='flex flex-col px-[9rem] z-10'>
//           <p className='text-6xl flex flex-start'>
//             <TypeAnimation
//               sequence={[
//                 'Welcome to JournalProbe',
//                 1000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//             />
//           </p>
//           <p className='py-2'>Track your moments and memories with food</p>
//           <div className='py-10 flex flex-start'>
//             <button className='w-[12rem] h-[3.5rem] bg-red-400 rounded-full' onClick={toExplore}>
//               <span className='text-2xl'>Explore</span>
//             </button>
//           </div>
          
//           {/* Card Grid */}
//           <div className='py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
//             {cards.map(card => (
//               <div key={card.id} className='card'>
//                 <div className='card-image'>
//                   <img src={card.imageUrl} alt={card.title} />
//                 </div>
//                 <div className='card-content'>
//                   <h2 className='card-title'>{card.title}</h2>
//                   <p className='card-description'>{card.content}</p>
//                   {/* <button className='learn-more'>Learn More</button> */}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Welcome;
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router';
import './Cardcarousel.css';
import indianImage from '../../assets/Images/indian.png';
import chineseImage from '../../assets/Images/chinese.png';
import continentalImage from '../../assets/Images/continental.png';
import arabicImage from '../../assets/Images/arabic.png';
import italyImage from '../../assets/Images/italy.png';
import frenchImage from '../../assets/Images/french.png';
import koreanImage from '../../assets/Images/korean.png';
import thaiImage from '../../assets/Images/thai.png';
import sampleVideo from '../../assets/Videos/samplevideo.mp4'; // Add your video path here

const Welcome = () => {
  const navigate = useNavigate();
  const toExplore = () => {
    navigate('/journals');
  };

  const cards = [
    { id: 1, title: 'Indian', imageUrl: indianImage },
    { id: 2, title: 'Chinese', imageUrl: chineseImage },
    { id: 3, title: 'Continental', imageUrl: continentalImage },
    { id: 4, title: 'Arabic', imageUrl: arabicImage },
    { id: 5, title: 'Italy', imageUrl: italyImage },
    { id: 6, title: 'French', imageUrl: frenchImage },
    { id: 7, title: 'Korean', imageUrl: koreanImage },
    { id: 8, title: 'Thai', imageUrl: thaiImage },
  ];

  return (
    <section className='h-auto mt-20'>
      <div className='relative flex justify-center items-center h-screen pb-10'>
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={sampleVideo}
          autoPlay
          loop
          muted
        ></video>

        {/* Welcome Text and Explore Button */}
        <div className='relative z-10 text-center text-white'>
          <p className='text-6xl mb-4'>
            <TypeAnimation
              sequence={[
                'Welcome to JournalProbe',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>
          <p className='py-2 text-xl'>Track your moments and memories with food</p>
          <div className='py-10'>
            <button className='w-[12rem] h-[3.5rem] bg-red-400 rounded-full' onClick={toExplore}>
              <span className='text-2xl'>Explore</span>
            </button>
          </div>
        </div>
      </div>

      {/* Card Grid */}
      <div className='py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {cards.map(card => (
          <div key={card.id} className='card'>
            <div className='card-image'>
              <img src={card.imageUrl} alt={card.title} />
            </div>
            <div className='card-content'>
              <h2 className='card-title'>{card.title}</h2>
              <p className='card-description'>{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Welcome;




