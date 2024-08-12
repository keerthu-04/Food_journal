// import React from 'react'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <div className='flex flex-col gap-4 text-[#333] bg-[#fce3e3] p-4'>
//         <div className='flex justify-around w-full'>
//             {/* <Link to={'/'}>Home</Link> */}
//             <Link to={'/about'}>About us</Link>
//             {/* <Link to={'/contactus'}>Contact us</Link> */}
//         </div>
//         <div>
//         Contact Us for your favourite Food Jounals !
//         </div>
//         <div>
//                 <div>+91 9765401275</div>
//                 <div>journalprobe@gmail.com</div>
//                 <div>India</div>
//             </div>
//         <div className='text-[12px]'>
//             © Copyright 2024 - JournalProbe
//         </div>
//     </div>
//   )
// }

// export default Footer
import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
// import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex flex-col gap-4 text-[#333] bg-[#fce3e3] p-4'>
        <div className='flex justify-around w-full'>
            {/* <Link to={'/'}>Home</Link> */}
            <Link to={'/Contactus'}>Contact us</Link>
            {/* <Link to={'/contactus'}>Contact us</Link> */}
        </div>
        <div>
        Contact Us for your favourite Food Journals!
        </div>
        <div>
            {/* <div><FaPhoneAlt />+91 9765401275</div> */}
            <div>journalprobe@gmail.com</div>
            <div>India</div>
        </div>
        <div className='flex justify-around w-full'>
            <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                <FaFacebook size={24} />
            </a>
            <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                <FaInstagram size={24} />
            </a>
            <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                <FaTwitter size={24} />
            </a>
        </div>
        <div className='text-[12px]'>
            © Copyright 2024 - JournalProbe
        </div>
    </div>
  )
}

export default Footer
