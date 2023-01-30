import React from 'react'

export default function ParentDetail({onSubmit, onBack, data, setData}) {
    const checkValid = ()=>{
        if(data.permanent_address?.trim().length >= 3);
        else return "Enter valid Permanent Address";
        if(data.permanent_pin?.trim().length >= 6);
        else return "Enter valid Permanent Pin code";
        if(data.current_address?.trim().length >= 3);
        else return "Enter valid Current Address";
        if(data.current_pin?.trim().length >= 6);
        else return "Enter valid Current Pin code";
        return false;
    }
    return (
        <div className='tw-h-full tw-flex tw-justify-center tw-flex-col tw-items-center'>
            <div className='tw-w-full'>
                <div className='tw-flex tw-flex-col tw-items-center tw-w-full'>
                    <input type="number" name="standard" value={data.standard} onChange={(e)=>setData({...data, [e.target.name] : e.target.value})} placeholder='Standard*' className='tw-border-gray-300 tw-border-2 tw-px-4 tw-py-2 focus:tw-outline-none tw-rounded-sm tw-w-4/5 tw-my-2'/>
                    <div className='tw-w-4/5 tw-flex tw-justify-between'><input type="text" name="permanent_address" value={data.permanent_address} onChange={(e)=>setData({...data, [e.target.name] : e.target.value})} placeholder='Permanent Address*' className='tw-border-gray-300 tw-border-2 tw-px-4 tw-py-2 focus:tw-outline-none tw-rounded-sm tw-w-[80%] tw-my-2'/><input type="text" name="permanent_pin" onChange={(e)=>setData({...data, [e.target.name] : e.target.value})} value={data.permanent_pin} placeholder='PinCode*' className='tw-border-gray-300 tw-border-2 tw-px-4 tw-py-2 focus:tw-outline-none tw-rounded-sm tw-w-[18%] tw-my-2'/></div>
                    <div className='tw-w-4/5 tw-flex tw-justify-between'><input type="text" name="current_address" value={data.current_address} onChange={(e)=>setData({...data, [e.target.name] : e.target.value})} placeholder='Current Address*' className='tw-border-gray-300 tw-border-2 tw-px-4 tw-py-2 focus:tw-outline-none tw-rounded-sm tw-w-[80%] tw-my-2'/><input type="text" name="current_pin" placeholder='PinCode*' value={data.current_pin} onChange={(e)=>setData({...data, [e.target.name] : e.target.value})} className='tw-border-gray-300 tw-border-2 tw-px-4 tw-py-2 focus:tw-outline-none tw-rounded-sm tw-w-[18%] tw-my-2'/></div>
                </div>
            </div>
            <div className='tw-flex tw-justify-evenly tw-w-full'>
                <input type="button" value="Back" className='tw-w-44 tw-bg-sky-500 tw-py-2 tw-rounded-md tw-my-12 tw-text-white tw-cursor-pointer hover:tw-bg-sky-600 tw-transition-all tw-duration-300' onClick={onBack}/><input type="button" value="Finish" className='tw-w-44 tw-bg-sky-500 tw-py-2 tw-rounded-md tw-my-12 tw-text-white tw-cursor-pointer hover:tw-bg-sky-600 tw-transition-all tw-duration-300' onClick={()=>{
                    var error;
                    if(error = checkValid()){
                        window.alert(error);
                        return;
                    }
                    onSubmit();
                }}/>
            </div>
        </div>
    )
}
