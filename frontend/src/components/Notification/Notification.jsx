import React from 'react'
import NotificationCard from './NotificationCard'

export default function Notification({notification, filter, subjects}) {
    const getSubject = (e)=>{
        if(!subjects)return "";
        for(var i of subjects){
            if(e.subject == i.subject_id)return i.name;
        }
    }
    return (
        <div className='tw-w-2/6 tw-max-w-2/6 tw-bg-[#7286D3] tw-h-full tw-overflow-y-scroll'>
            <div className='tw-p-2 tw-text-2xl tw-text-[#FFF] tw-border-t-2 tw-border-[#FFFFFF] sticky'>Notifications</div>
            <div>
                {
                    notification.map((e, ind)=>{
                        if(!filter)
                            return <NotificationCard data={e} key={ind} subject={getSubject(e)}/>
                        else if(filter && filter == e.subject)
                            return <NotificationCard data={e} key={ind} subject={getSubject(e)}/>
                        else 
                            return null;
                    })
                }
            </div>
        </div>
    )
}
