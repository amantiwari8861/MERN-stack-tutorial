import React from 'react'
import AppBar from "../components/AppBar"
import "./Dashboard.css"
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className='body'>
      <AppBar/>
      <div className="parent">
          <div className="div1" onClick={()=> navigate("/transportprcreation")}>
            Transport PR creation    
          </div>
          <div className="div2">
            Transport Co-ordinator for transporter allocation
          </div>
          <div className="div3">
          Transporter
          </div>
          <div className="div4">
            Dispatcher (Vendor/Material Gate)
          </div>
          <div className="div5">
           Gate Entry Intelligence system
          </div>
          <div className="div6">
             Transporter Delivery Conformation
          </div>
          <div className="div7">
             Logistics Co-ordinator Dashboard
          </div>
          <div className="div8">
            Transport Dashboard/Clarification
          </div>
          <div className="div9">
            SCM Approver Dashboard
          </div>

      </div>
      <br/>
      <br/>
    </div>
  )
}

export default Dashboard