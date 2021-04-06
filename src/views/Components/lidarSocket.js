import React from 'react'
import io from "socket.io-client";

let lidar = io.connect("https://stepverder.nl:6600") // poort to connect with

lidar.on("welcome",(data)=>{
    console.log(data)
  })

  lidar.on("inputLidar",(incomingdata)=>{
          
    console.log(incomingdata) // zou een array moeten zijn met 2 waardes, de hoek en afstand
  })

function lidarSocket(){
 return<h1>Socketio test</h1>
}


export default lidarSocket
