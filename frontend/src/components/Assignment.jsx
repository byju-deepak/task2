import React from 'react'
import AssignmentCard from './AssignmentCard'

export default function Assignment({assignment}) {
    return (
        <div className='tw-flex tw-flex-wrap tw-overflow-y-scroll tw-max-h-[92%] tw-justify-evenly'>
            {
                assignment?.data?.length == 0 ?(
                    <div className='tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-text-xl tw-p-4 tw-text-center'>No Assignment Avilable</div>
                ):(
                    assignment?.data?.map((e, ind)=><AssignmentCard data={e} key={ind}/>)
                )
            }
        </div>
    )
}
