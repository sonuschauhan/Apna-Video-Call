import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import { Restore } from '@mui/icons-material';
import { AuthContext } from '../contexts/AuthContext';


function HomeComponent() {

    let navigate=useNavigate();
    const [meetingCode,setMeetingCode]=useState("");
    const {addToUserHistory}=useContext(AuthContext);
    let handleJoinVideoCall= async ()=>{
       await addToUserHistory(meetingCode); 
        navigate(`/${meetingCode}`);

    }

  return (
    <>
      <div className="navBar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>Apna Video Call</h2>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={()=>{navigate("/history")}}>
            <Restore />
          </IconButton>
          <p>History</p>
          <Button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
          >
            Logout
          </Button>
        </div>
      </div>
      <div className="meetContainer">
        <div className="leftPanel">
          <h2>Providing Quality Video Call Just Like QUality Education</h2>
          <div style={{ display: "flex", gap: "10px" }}>
            <TextField
              onChange={(e) => setMeetingCode(e.target.value)}
              id="outlined-basic"
              label="Meeting Code"
              variant="outlined"
              value={meetingCode}
            ></TextField>
            <Button variant='contained' onClick={handleJoinVideoCall}>Join</Button>
          </div>
        </div>
        <div className="rightPanel">
            <img src="/logo3.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default withAuth(HomeComponent)
