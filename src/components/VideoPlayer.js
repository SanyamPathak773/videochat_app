import React, { useContext } from 'react'
import { Grid, makeStyles} from '@material-ui/core';
import {SocketContext} from '../SocketContext';
import '../VideoPlayer.css';
const useStyles = makeStyles((theme) => ({
    video: {
      width: '550px',
      [theme.breakpoints.down('xs')]: {
        width: '300px',
      },
    },
    gridContainer: {
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        
      },
    },
    paper: {
      padding: '10px',
      border: '2px solid black',
      margin: '10px',
    },
  }));
function VideoPlayer() {
  const {name, callAccepted, myVideo, userVideo,callEnded, stream, call} = useContext(SocketContext);
    const classes = useStyles();
    return (
        <Grid container className = {classes.gridContainer}>
          {/*our own video*/}
          {stream && (
          
            <Grid item xs = {12} md={6}>
              <h4 >{name ||'Name'} </h4>
              <video playsInline ref = {myVideo} autoPlay className = {classes.video} />
            </Grid>
          
          )}
          {/*user's video*/}
          {callAccepted && !callEnded &&(
          
            <Grid item xs = {12} md={6}>
              <h5>{call.name ||'Name'}</h5>
              <video playsInline ref = {userVideo} autoPlay className = {classes.video} />
            </Grid>
          
          )}
        </Grid>
    );
};

export default VideoPlayer;
