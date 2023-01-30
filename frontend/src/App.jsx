import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Router, Routes, useNavigate } from "react-router-dom";
import Form from "./components/Form/Form";
import Login from "./components/Form/Login";
import Header from "./components/Header";
import Chapter from "./page/Chapter";
import Dashboard from "./page/Dashboard";
import Subject from "./page/Subject";

function App() {
    const [subjects, setSubjects] = useState([])
    const [student, setStudent] = useState({});
    useEffect(()=>{
        axios.get("http://localhost:8000/api/subject/all", {
            headers : {
                "auth-token" : localStorage.getItem("token")
            }
        }).then(res=>{
            setSubjects(res.data.subjects)
        }).catch((e)=>{})
        axios.get("http://localhost:8000/api/user", {
            headers : {
                "auth-token" : localStorage.getItem("token")
            }
        }).then((e)=>{
            setStudent(e.data.user[0]);
            console.log(e.data.user[0]);
        }).catch((e)=>{})
    }, [])
    return (
        <div className="tw-h-screen tw-w-screen tw-max-h-screen tw-flex tw-flex-col">
            <Header student={student}/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard subjects={subjects} student={student}/>} />
                    <Route path="/register" element={<Form steps={2} student={student}/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/subject" element={<Subject subjects={subjects} student={student}/>} />
                    <Route path="/subject/chapter" element={<Chapter subjects={subjects} student={student}/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
