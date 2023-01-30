import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Assignment from './Assignment';
import ChapterCard from './ChapterCard';

export default function SubjectDetails({chapters, progress, assignment}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [chapterView, setChapterView] = useState(searchParams.get("chapter"));

    return (
        <div>
            <div className='tw-py-2 tw-bg-[#E5E0FF] tw-m-[2px] tw-flex tw-justify-evenly'>
                <div className={`tw-transition-all tw-duration-300 tw-ease-linear tw-w-5/12 tw-text-center tw-py-2 tw-cursor-pointer tw-rounded ${chapterView==="true"?"tw-bg-white tw-shadow tw-shadow-[#7286D3]":""}`} onClick={()=>{setSearchParams({subject:searchParams.get("subject"), chapter:true}); setChapterView("true")}}>Study Material</div>
                <div className={`tw-transition-all tw-duration-300 tw-ease-linear tw-w-5/12 tw-text-center tw-cursor-pointer tw-py-2 tw-rounded ${chapterView==="true"?"":"tw-bg-white tw-shadow tw-shadow-[#7286D3]"}`} onClick={()=>{setSearchParams({subject:searchParams.get("subject"), chapter:false}); setChapterView("false")}}>Assignment/Test</div>
            </div>
            {chapterView == "true"?<Chapters chapters={chapters} progress={progress}/>:<Assignment assignment={assignment}/>}
        </div>
    )
}

const Chapters = ({chapters, progress})=>{
    return (
        <div>
            {
                chapters?.length == 0?(
                    <div className='tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-text-xl tw-p-4 tw-text-center'>No Content Avilable</div>
                ):(
                    chapters?.map((e, ind)=>{
                        return <ChapterCard data={e} progress={progress} key={ind} ind={ind}/> 
                    })
                )
            }
        </div>
    )
}