import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header({student}) {
    if(!student.email) return null;
    const showProfile = ()=>{
        
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
                <button className='tw-bg-white tw-text-[#501c58] tw-py-3 tw-px-8 tw-rounded hover:tw-shadow hover:tw-shadow-slate-200 tw-transition-all tw-duration-300 tw-mr-4' onClick={showProfile}>Profile</button>
                <button className='tw-bg-white tw-text-[#501c58] tw-py-3 tw-px-8 tw-rounded hover:tw-shadow hover:tw-shadow-slate-200 tw-transition-all tw-duration-300' onClick={()=>{
                    localStorage.removeItem("token");
                    window.location.reload();
                }}>Log Out</button>
            </div>
        </div>
    )
}
