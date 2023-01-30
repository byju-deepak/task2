import React from 'react'
import { useNavigate } from 'react-router-dom';
const parse = require('postgres-date')

export default function NotificationCard({data,subject}) {
    const navigate = useNavigate();
    const getTime = (timestamp)=>{
        const date = new Date(timestamp);
        const today = new Date();
        if(date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()){
            return "at " + date.getHours() + ":" + date.getMinutes();
        }
        return "at " + date.getHours() + ":" + date.getMinutes() + " on " + date.getDate() + date.getMonth() + "-" + date.getFullYear();
    }
    return (
        <div className='tw-flex tw-flex-col tw-py-1 tw-px-2 tw-bg-[white] tw-m-1 tw-rounded-sm tw-cursor-pointer tw-text-black hover:tw-bg-slate-100 tw-transition-all tw-duration-300' onClick={()=>navigate(data.weburl)}>
            <div>{data.body}</div>
            <div className='tw-text-right tw-text-sm tw-text-gray-600'>{subject} {getTime(data.createdat)}</div>
        </div>
    )
}
// {body:"Attempt test ative between 10:00AM to 12:00PM", subject:"Math", subject_id : 3, timestamp:1674540525284},
