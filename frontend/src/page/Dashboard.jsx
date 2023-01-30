import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Form from '../components/Form/Form'
import Notification from '../components/Notification/Notification'
import SubjectCard from '../components/SubjectCard'

export default function Dashboard({subjects, notification}) {

    const navigate = useNavigate();
    if(!localStorage.getItem("token")) return <Form steps={2} />

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
