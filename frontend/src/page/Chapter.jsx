
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ChapterCard from '../components/ChapterCard'
import ContentCard from '../components/ContentCard';
import Form from '../components/Form/Form';
import SubjectCard from '../components/SubjectCard';

export default function Chapter({subjects}) {
    const [searchParams] = useSearchParams();
    const [subject, setSubject] = useState([]);
    const [chapters, setChapters] = useState([]);
    const [topics, setTopics] = useState([])
    const navigate = useNavigate();

    const getTopicProgress = ()=>{
        axios.get(`http://localhost:8000/api/chapter/progress?chapter_id=${searchParams.get("chapter")}`, {
            headers : {
                "auth-token" : localStorage.getItem("token")
            }
        }).then((res)=>{
            setTopics(res.data);
        })
    }

    const getChapters = ()=>{
        axios.get(`http://localhost:8000/api/subject?subject_id=${searchParams.get("subject")}`, {
            headers : {
                "auth-token" : localStorage.getItem("token")
            }
        }).then((res)=>{
            console.log(res.data)
            setSubject(res.data.chapters);
        })
    }

    const getSubject = ()=>{
        axios.get(`http://localhost:8000/api/subject/chapter?subject_id=${searchParams.get('subject')}&chapter_id=${searchParams.get('chapter')}`, {
            headers : {
                "auth-token" : localStorage.getItem("token")
            }
        }).then((res)=>{
            setChapters(res.data.resources);
        })
    }

    useEffect(()=>{
        getChapters();
    }, [])
    useEffect(()=>{
        getSubject();
        getTopicProgress();
    }, [searchParams])
    
    if(!localStorage.getItem("token")) return <Form steps={2} />

    return (
        <div style={{backgroundImage:"url(./assets/background.jpg)"}} className='tw-w-full tw-h-full tw-bg-cover tw-flex tw-justify-between'>
            <div className='tw-flex tw-flex-col tw-bg-[#7286D3] tw-border-t-2 tw-border-r-2 tw-border-[#FFFFFF] '>
                {
                    subjects.map((e,ind)=><SubjectCard data={e} iconView={true} key={ind}/>)
                }
            </div>
            <div className='tw-h-full tw-min-w-fit tw-bg-[#7286D3] tw-border-t-2 tw-border-white'>
                {
                    subject?.map((e, ind)=>{
                        return <ChapterCard data={e} key={ind} ind={ind} iconView={true}/> 
                    })
                }
            </div>
            <div className='tw-w-full tw-flex tw-items-start tw-flex-wrap'>
                {
                    chapters.length == 0?(
                        <div className='tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-text-xl tw-p-4 tw-text-center'>No Content Avilable</div>
                    ):(
                        chapters.map((e, ind)=>{
                            return <ContentCard data={e} key={ind} topics={topics} getTopicProgress={getTopicProgress}/>
                        })
                    )
                }
            </div>
        </div>
    )
}
