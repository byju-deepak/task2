import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header({student}) {
    const [profile, setProfile] = useState(false)
    if(!student.email) return null;
    const showProfile = ()=>{
        setProfile(!profile)
    }
    return (
        <div className='tw-flex tw-justify-between tw-py-8 tw-px-8 tw-h-[120px] tw-bg-[#7286D3] tw-text-white tw-items-center'>
            <div className='tw-flex tw-h-full tw-items-center'>
                <img src="./assets/user.jpeg" alt="" className='tw-h-[80px] tw-rounded-full'/>
                <div className='tw-px-6'>
                    <div>Hi, {student.name}</div>
                    <div><span>Standard</span> {student.standard}</div>
                </div>
            </div>
            <div>
                <button className='tw-bg-white tw-text-[#501c58] tw-py-3 tw-px-8 tw-rounded hover:tw-shadow hover:tw-shadow-slate-200 tw-transition-all tw-duration-300 tw-mr-4 tw-relative' onClick={showProfile}>
                    Profile
                    {<div className={`tw-absolute tw-overflow-hidden tw-top-[120%] tw-left-[50%] -tw-translate-x-[50%] tw-bg-[#E5E0FF] tw-w-[400px] tw-rounded tw-py-4 ${profile?"tw-opacity-100":"tw-opacity-0"} tw-transition-all tw-duration-300 tw-shadow-xl`} style={{pointerEvents:"none"}}>
                        <div><span className='tw-mr-2 tw-opacity-75'>Name:</span><span>{student.name}</span></div> 
                        <div><span className='tw-mr-2 tw-opacity-75'>Standard:</span><span>{student.standard}</span></div> 
                        <div><span className='tw-mr-2 tw-opacity-75'>Email:</span><span>{student.email}</span></div> 
                        <div><span className='tw-mr-2 tw-opacity-75'>Phone No:</span><span>{student.phone_no}</span></div> 
                        <div><span className='tw-mr-2 tw-opacity-75'>Current Address:</span><span>{student.cur_address}</span></div> 
                        <div><span className='tw-mr-2 tw-opacity-75'>Permanent Address:</span><span>{student.per_address}</span></div> 

                    </div>}
                </button>
                <button className='tw-bg-white tw-text-[#501c58] tw-py-3 tw-px-8 tw-rounded hover:tw-shadow hover:tw-shadow-slate-200 tw-transition-all tw-duration-300' onClick={()=>{
                    localStorage.removeItem("token");
                    window.location.reload();
                }}>Log Out</button>
            </div>
        </div>
    )
}
