import React from 'react'
import { useState } from 'react'

export default function StudentDetail({onSubmit, data, setData}) {
    const getImageUrl = (e)=>{
        const file = e.target.files[0];
        if(!file) return
        if(file.name.endsWith(".jpg") || file.name.endsWith(".png") || file.name.endsWith(".jpeg")){
            setData({...data, stud_img : URL.createObjectURL(file)});
        }else{
            alert("Only jpg, png and jpeg type allowed");
        }
    }

    var checkValid = ()=>{
        if(data.name?.trim().length >= 3);
        else return "Enter valid first name";
        if(data.password?.trim().length >= 8);
        else  return "Enter valid last name";
        if(!data.email_id?.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) return "Enter Valid Email";
        if(data.phone_no?.trim().length === 10);
        else return "Enter valid phone number";
        if(!data.stud_img)return "Select profile image";
        return false;
    }

    return (
        <div className='tw-h-full tw-flex tw-justify-center tw-flex-col tw-items-center'>
            <div className='tw-grid tw-grid-cols-2 tw-place-items-center tw-w-full'>
                <div className='tw-flex tw-flex-col tw-items-center tw-w-full'>
                    <input type="text" name="name" required={true} value={data.name} onChange={(e)=>setData({...data, [e.target.name] : e.target.value})} placeholder='Name*' className='tw-border-gray-300 tw-border-2 tw-px-4 tw-py-2 focus:tw-outline-none tw-rounded-sm tw-w-4/5 tw-my-2'/>
                    <input type="password" name="password" required={true} value={data.password} onChange={(e)=>setData({...data, [e.target.name] : e.target.value})} placeholder='Password*' className='tw-border-gray-300 tw-border-2 tw-px-4 tw-py-2 focus:tw-outline-none tw-rounded-sm tw-w-4/5 tw-my-2'/>
                    <input type="email" name="email_id" required={true} value={data.email_id} onChange={(e)=>setData({...data, [e.target.name] : e.target.value})} placeholder='Email ID*' className='tw-border-gray-300 tw-border-2 tw-px-4 tw-py-2 focus:tw-outline-none tw-rounded-sm tw-w-4/5 tw-my-2'/>
                    <input type="text" name="phone_no" required={true} value={data.phone_no} onChange={(e)=>setData({...data, [e.target.name] : e.target.value})} placeholder='Phone No*' className='tw-border-gray-300 tw-border-2 tw-px-4 tw-py-2 focus:tw-outline-none tw-rounded-sm tw-w-4/5 tw-my-2'/>
                </div>
                <div>
                    <input type="file" className='tw-hidden' id='studentImg' required={true} onChange={getImageUrl} accept=".jpg, .jpeg, .png" />
                    <label htmlFor="studentImg" className='tw-cursor-pointer'>
                        {data.stud_img?<img src={data.stud_img} className="tw-w-44 tw-h-44 tw-rounded-md tw-border-solid tw-border-2 tw-border-gray-300"/>:<div className='tw-w-44 tw-h-44 tw-border-dotted tw-border-2 tw-border-gray-300 tw-rounded-md tw-flex tw-justify-center tw-items-center'>Select Image</div>}
                    </label>
                </div>
            </div>
            <div className='tw-flex tw-justify-evenly tw-w-full'>
                <input type="button" value="Next" className='tw-w-44 tw-bg-sky-500 tw-py-2 tw-rounded-md tw-my-12 tw-text-white tw-cursor-pointer hover:tw-bg-sky-600 tw-transition-all tw-duration-300' onClick={()=>{
                    var error;
                    if(error = checkValid()) {
                        window.alert(error);
                        return;
                    }
                    onSubmit();
                }}/>
            </div>
        </div>
    )
}
