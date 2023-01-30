import axios from 'axios';
import React from 'react'
import { useSearchParams } from 'react-router-dom';

export default function ContentCard({data, topics, getTopicProgress, filter}) {
    const [searchParams] = useSearchParams();
    const getIsCompleted = ()=>{
        if(topics?.data?.length === 0)return false;
        if(topics.data?.[0]?.completed?.indexOf(data?.resource_id) != -1) return true;
        return false;
    }

    const setCompleted = ()=>{
        console.log("first")
        axios.post(
            `http://localhost:8000/api/resource/markasread?chapter_id=${searchParams.get("chapter")}&subject_id=${searchParams.get("subject")}&resource_id=${data.resource_id}`, 
            {},
            {  
                headers : {
                    "auth-token" : localStorage.getItem("token")
                }    
            }
        ).then((res)=>{
            getTopicProgress();
            console.log(res);
        }).catch((e)=>console.log(e));
    }
    if(!data.name.toLowerCase().includes(filter.toLowerCase())) return <></>
    return (
      <div className='tw-flex tw-flex-col tw-relative tw-p-12 tw-m-6 tw-items-center tw-w-fit tw-shadow-md tw-cursor-pointer tw-rounded-md tw-bg-[#FFF2F2 tw-border-2 tw-border-[#8EA7E9] hover:tw-shadow-[#8EA7E9] tw-transition-all tw-duration-300]'>
          <div className='tw-uppercase tw-absolute tw-right-0 tw-top-0 tw-px-2 tw-py-[2px] tw-bg-[#7286D3] tw-rounded-bl tw-rounded-tr tw-text-white'>{data.type}</div>
          <div className='tw-text-xl tw-mb-4'>{data.name}</div>
          <iframe src={data.url} className="tw-w-48 tw-mb-4"/>        
          <a href={data.url} target="_blank" className={`${getIsCompleted()?"tw-bg-green-500":"tw-bg-[#7286d3]"} tw-text-white tw-py-2 tw-px-4 tw-rounded-sm`} onClick={()=>setCompleted()}>{getIsCompleted()?"Done! Open Again":"Click to Open Resource"}</a>
      </div>
    )
}
