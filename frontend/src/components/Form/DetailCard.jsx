import React, { } from 'react'

export default function DetailCard({student}) {
    return (
        <div className='tw-min-w-[60vw] tw-min-h-3/5 tw-shadow-md tw-rounded-md tw-border-px tw-p-8 tw-border-2 tw-border-gray-300 tw-bg-white tw-flex tw-justify-evenly tw-items-center tw-my-8'>
            <div>
                <div className='tw-my-2'><span className='tw-text-gray-500 tw-font-bold tw-mr-2'>Name</span> <span>{student.first_name} {student.last_name}</span></div>
                <div className='tw-my-2'><span className='tw-text-gray-500 tw-font-bold tw-mr-2'>Email</span> <span>{student.email_id}</span></div>
                <div className='tw-my-2'><span className='tw-text-gray-500 tw-font-bold tw-mr-2'>Phone No</span> <span>{student.phone_no}</span></div>
                <div className='tw-my-2'><span className='tw-text-gray-500 tw-font-bold tw-mr-2'>Father Name</span> <span>{student.father_name}</span></div>
                <div className='tw-my-2'><span className='tw-text-gray-500 tw-font-bold tw-mr-2'>Mother Name</span> <span>{student.mother_name}</span></div>
                <div className='tw-my-2'><span className='tw-text-gray-500 tw-font-bold tw-mr-2'>Permanent Address</span> <span>{student.permanent_address}, {student.per_pincode}</span></div>
                <div className='tw-my-2'><span className='tw-text-gray-500 tw-font-bold tw-mr-2'>Current Address</span> <span>{student.current_address}, {student.cur_pincode}</span></div>
                <div className='tw-my-2'><span className='tw-text-gray-500 tw-font-bold tw-mr-2'>School Name</span> <span>{student.school_name}</span></div>
                <div className='tw-my-2'><span className='tw-text-gray-500 tw-font-bold tw-mr-2'>Standard</span> <span>{student.standard}</span></div>
                <div className='tw-my-2'><span className='tw-text-gray-500 tw-font-bold tw-mr-2'>School Address</span> <span>{student.school_address}, {student.school_pincode}</span></div>
            </div>
            <div>
                 <img src={student.stud_img || "./logo512.png"} alt="" className='tw-w-44 tw-h-44 tw-rounded-md tw-border-solid tw-border-2 tw-border-gray-300'/>
            </div>
        </div>
    )
}
