import React,{useEffect, useState} from 'react'
import Loading from './Loading';
import '../css-style/Sidebar.css';
const BASE_URL = 'https://leetcode-solutions.onrender.com';
export default function Sidebar() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getUsers = async ()=>{
    const response = await fetch(`${BASE_URL}/getQuestions`,{
      method:'GET',
    })
   const data = await response.json();
   setData(data);
   setLoading(true);
  }

  useEffect(()=>{
    getUsers();
  },[])

  return (
    <div id="sidebar">
        <ul>
            <li><h2>Problems -</h2></li>
            <ul id="questions-no">
                {loading ? data.map(doc => (
                    <li><a href={"#"+doc.q_no} key={doc._id}>{doc.q_no}. {doc.question}</a></li>        
                )): <Loading/>}
            </ul>
        </ul>
    </div>
  )
}
