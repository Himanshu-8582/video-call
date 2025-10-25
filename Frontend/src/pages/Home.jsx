import React, { useContext } from 'react'
import withAuth from '../utils/withAuth.jsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';
import { IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { Button } from '@mui/material';
import { AuthContext } from '../contexts/AuthContext.jsx';

function Home() {

  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");

  const { addToUserHistory } = useContext(AuthContext);

  let handleJoinVideoCall = async () => {
    // Logic to join video call
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);

  }

  return (
    <>
    <div className='navBar'>

      <div style={{ display: "flex", alignItems: "center" }}>
        <h2>My Video Call</h2>
      </div>

      <div style={{ display: "flex" , alignItems: "center", gap: "20px" }}>
          <IconButton
            onClick={()=>navigate("/history")}
          >
          <RestoreIcon onClick={() => { navigate('/') }} style={{ color: "black" }} />
        </IconButton>

        <p>History</p>

        <Button onClick={() => {
          localStorage.removeItem("token");
          navigate('/auth');
        }}>
          Logout
        </Button>

      </div>

    </div>

      <div className="meetContainer">
        <div className="leftPannel">
          <div>
            <h2>Providing Quality Video Call Just like Quality Education</h2>
            <div style={{ display: "flex", gap: "10px" }}>
              <TextField
                onChange={e => setMeetingCode(e.target.value)}
                id='outlined-basic'
                label="Meeting Code"
                variant='outlined'
              />
              <Button variant="contained" onClick={handleJoinVideoCall}>Join</Button>
            </div>
          </div>
        </div>

        <div className="rightPannel">
          <img srcSet='/logo3.png' alt=''/>
        </div>
      </div>

    </>
  )
}

export default withAuth(Home);