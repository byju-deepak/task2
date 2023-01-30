import { CircularProgress } from '@mui/material';
import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function ChapterCard({data, ind, iconView, progress}) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const getProgress = ()=>{
        var completed = 0;
        const curProgress = progress?.data?.filter((e)=>e.chapter == data.chapter_id)
        if(curProgress?.length > 0) completed = curProgress[0].completed?.length;
        return completed / data.resources.length;
    }


    if(searchParams.get("chapter") == data.chapter_id){
        return(
            <div className={`tw-m-2 ${iconView?"tw-bg-[#FFF2F2] tw-text-black":"tw-bg-[#8EA7E9] tw-text-[white]"} tw-py-2 tw-px-4 tw-rounded-sm ${iconView?"hover:tw-bg-[#FFF2F2]":"hover:tw-bg-[#7286D3]"} tw-cursor-pointer tw-transition-all tw-duration-300 tw-flex tw-justify-between tw-items-center`} onClick={()=>navigate(`/subject/chapter?subject=${data.subject}&chapter=${data.chapter_id}`)}>
                <div>Ch {ind + 1}{iconView?"":". "+data.name}</div>
                {iconView?null:<div>Completed {getProgress() * 100}%</div>}
            </div>
        )
    }else{
        return (
            <div className={`tw-m-2 ${iconView?"tw-bg-white tw-text-black":"tw-bg-[#8EA7E9] tw-text-[white]"} tw-py-2 tw-px-4 tw-rounded-sm ${iconView?"hover:tw-bg-[#FFF2F2]":"hover:tw-bg-[#7286D3]"} tw-cursor-pointer tw-transition-all tw-duration-300 tw-flex tw-justify-between tw-items-center`} onClick={()=>navigate(`/subject/chapter?subject=${data.subject}&chapter=${data.chapter_id}`)}>
                <div>Ch {ind + 1}{iconView?"":". "+data.name}</div>
                {iconView?null:<div>Completed {getProgress() * 100}%</div>}
            </div>
        )
    }
}