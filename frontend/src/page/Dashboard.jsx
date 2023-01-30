import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Notification from '../components/Notification/Notification'
import SubjectCard from '../components/SubjectCard'

export default function Dashboard({subjects}) {
    const notification = [
        {body:"Do your homework by 10pm", subject : 1, timestamp:1674548625284},
        {body:"Test class result has been announced", subject : 1, timestamp:1674541625284},
        {body:"New Assignment for chapter 3", subject : 2, timestamp:167454065284},
        {body:"New study matrial for chapter 2", subject : 4, timestamp:1674540624284},
        {body:"Attempt test ative between 10:00AM to 12:00PM", subject : 3, timestamp:1674540525284},
    ]

    const navigate = useNavigate();
    if(!localStorage.getItem("token")) navigate("/register");

    return (
        <div style={{backgroundImage:"url(./assets/background.jpg)"}} className='tw-w-full tw-h-full tw-bg-cover tw-flex tw-justify-between'>
            <div className='tw-flex tw-m-8'>
                {
                    subjects.map((e)=><SubjectCard data={e}/>)
                }
            </div>
            <Notification notification={notification} subjects={subjects}/>
            
        </div>
    )
}
