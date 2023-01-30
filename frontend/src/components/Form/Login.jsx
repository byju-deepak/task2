import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import FormContainer from './FormContainer';

export default function Login() {
    const [data, setData] = useState({})
    const navigate = useNavigate();
    var checkValid = ()=>{
        if(!data.email_id?.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) return "Enter Valid Email";
        if(data.password?.trim().length >= 8);
        else  return "Enter valid Password";
        return false;
    }

    const onSubmit = (e)=>{
        console.log(data);
        axios.post("http://localhost:8000/api/user/login", data).then((res)=>{
            localStorage.setItem("token", res.data.token);
            navigate("/");
            window.location.reload();
        }).catch((e)=>{
            window.alert(e.response.data.error)
        })
    }

    return (
        <div className='tw-w-3/6 tw-m-auto tw-self-center'>
            <Link to={"/register"} className="tw-absolute tw-top-4 tw-right-4 tw-text-sky-500 tw-underline">Register</Link>
            <FormContainer heading="Login" element={<LoginForm data={data} setData={setData} checkValid={checkValid} onSubmit={onSubmit}/>} />
        </div>
    )
}

const LoginForm = ({data, setData, checkValid, onSubmit})=>{
    return(
        <div className='tw-h-full tw-flex tw-justify-center tw-flex-col tw-items-center'>
            <div className='tw-grid tw-grid-cols-1 tw-place-items-center tw-w-full'>
                <div className='tw-flex tw-flex-col tw-items-center tw-w-full'>
                    <input type="email" name="email_id" required={true} value={data.email_id} onChange={(e)=>setData({...data, [e.target.name] : e.target.value})} placeholder='Email ID*' className='tw-border-gray-300 tw-border-2 tw-px-4 tw-py-2 focus:tw-outline-none tw-rounded-sm tw-w-4/5 tw-my-2'/>
                    <input type="password" name="password" required={true} value={data.password} onChange={(e)=>setData({...data, [e.target.name] : e.target.value})} placeholder='Password*' className='tw-border-gray-300 tw-border-2 tw-px-4 tw-py-2 focus:tw-outline-none tw-rounded-sm tw-w-4/5 tw-my-2'/>
                    <input type="button" value="Login" className='tw-w-4/5 tw-bg-sky-500 tw-py-2 tw-rounded-md tw-my-12 tw-text-white tw-cursor-pointer hover:tw-bg-sky-600 tw-transition-all tw-duration-300' onClick={()=>{
                        var error;
                        if(error = checkValid()) {
                            window.alert(error);
                            return;
                        }
                        onSubmit();
                    }}/>
                </div>
            </div>
        </div>
    )
}
