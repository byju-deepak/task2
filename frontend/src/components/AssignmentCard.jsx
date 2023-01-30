import React from 'react'
import { useSearchParams } from 'react-router-dom';

export default function AssignmentCard({data}) {
    const [searchParams] = useSearchParams();

    return (
      <div className='tw-flex tw-w-[30%] tw-flex-col tw-relative tw-py-12 tw-px-4 tw-m-6 tw-items-center tw-shadow-md tw-cursor-pointer tw-rounded-md tw-bg-[#FFF2F2 tw-border-2 tw-border-[#8EA7E9] hover:tw-shadow-[#8EA7E9] tw-transition-all tw-duration-300]'>
            <div className='tw-text-xl tw-mb-3 tw-font-bold'>{data.topic}</div>
            <div className='tw-mb-6'>{data.ass_content}</div>
            <a href={data.url} target="_blank" className='tw-relative'>
                {data.url && <img src={data.url} className="tw-mb-4 tw-h-56" allowFullScreen={true}/>}
                {data.url?<div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-z-10"></div>:<div className="tw-h-56 tw-flex tw-items-center tw-justify-center tw-text-xl">No attachment</div>}
            </a>
            <input type="file" name="" id="uploadAssignment" className='tw-hidden'/>
            <label htmlFor='uploadAssignment' className={`tw-bg-[#7286d3] tw-text-white tw-py-2 tw-px-16 tw-rounded-sm tw-cursor-pointer`}>Upload</label>
      </div>
    )
}
