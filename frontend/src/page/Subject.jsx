import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Form from '../components/Form/Form'
import Notification from '../components/Notification/Notification'
import SubjectCard from '../components/SubjectCard'
import SubjectDetails from '../components/SubjectDetails'

export default function Subject({subjects, notification}) {
    const [searchParams] = useSearchParams();
    const [progress, setProgress] = useState({})
    const [subject, setSubject] = useState({})
    const [assignment, setAssignment] = useState({})
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/subject?subject_id=${searchParams.get("subject")}`, {
            headers : {
                "auth-token" : localStorage.getItem("token")
            }
        }).then((res)=>{
            setSubject(res.data);
        })
        axios.get(`http://localhost:8000/api/subject/progress?subject_id=${searchParams.get("subject")}`, {
            headers : {
                "auth-token" : localStorage.getItem("token")
            }
        }).then((res)=>{
            setProgress(res.data)
        })
        axios.get(`http://localhost:8000/api/assignment?subject_id=${searchParams.get("subject")}&standard_id=1`, {
            headers : {
                "auth-token" : localStorage.getItem("token")
            }
        }).then((res)=>{
            setAssignment(res.data);
        })

    }, [searchParams])

    if(!localStorage.getItem("token")) return <Form steps={2} />
    return (
        <div style={{backgroundImage:"url(./assets/background.jpg)"}} className='tw-w-full tw-h-full tw-bg-cover tw-flex tw-justify-between'>
            <div className='tw-flex tw-flex-col tw-bg-[#7286D3] tw-border-t-2 tw-border-[#FFFFFF]'>
                {
                    subjects.map((e,ind)=><SubjectCard data={e} iconView={true} key={ind}/>)
                }
            </div>
            <div className='tw-w-full tw-h-full'>
                <SubjectDetails chapters={subject.chapters} progress={progress} assignment={assignment} />
            </div>
            <Notification notification={notification} filter={searchParams.get("subject")} subjects={subjects}/>
            
        </div>
    )
}
