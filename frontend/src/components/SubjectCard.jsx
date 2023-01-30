import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function SubjectCard({data, iconView}) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    return (
        <div className={`${iconView?"tw-w-16 tw-h-16":"tw-w-56 tw-h-56"} tw-flex tw-flex-col tw-justify-center tw-items-center ${data.subject_id == searchParams.get("subject")?"tw-bg-[#FFF2F2]":"tw-bg-[white]"} tw-m-4 tw-rounded tw-shadow tw-border-2 tw-border-[#8EA7E9] hover:tw-shadow-[#8EA7E9] tw-transition-all tw-duration-300 tw-cursor-pointer`} onClick={()=>navigate(`/subject?subject=${data.subject_id}&chapter=true`)}>
            <img src={data.image} alt="" className={`${iconView?"tw-w-10 tw-h-10":"tw-w-32 tw-h-32 tw-mb-3"}`}/>
            {iconView?<></>:<div>{data.name}</div>}
        </div>
    )
}
