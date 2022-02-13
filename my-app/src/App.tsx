import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
// import { useRef, useEffect } from 'react'
import { Socket, io } from 'socket.io-client';
import "./Form.css";
// import { Game } from './Game';
import Canvas from './Game';
import { useState } from 'react';



type FormValues = {
  firstName: string;
  lastName: string;
  Email_player1: string;
  Email_player2: string;

};


export default function App() {



  const { register, handleSubmit } = useForm<FormValues>();
  const [showCanvas, setShowCanvas] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [showTtile, setTtile] = useState(true);
  const [CanvasTitle, setCanvasTitle] = useState(false);
  const [datas, setData] =  useState({email1:"",email2:"",Name:""});
  let T 

  //initial WebSocketServer 
  const socket = io('http://localhost:3080');

  const onSubmit: SubmitHandler<FormValues> = (data) => {

    setData({email1:data.Email_player1,email2:data.Email_player2,Name:data.firstName});
    window.sessionStorage.setItem("myEmail",data.Email_player1);
    setShowForm(false);
    setShowCanvas(true);
    setTtile(false);
    setCanvasTitle(true);
    socket.emit('UserToServer', data);
  }

  return (

    <div  className="App">
      {/* <center> */}
      {showTtile
        && <h1>Ping Pong Player - Registration</h1>
      }
      {CanvasTitle && <h1>Ping Pong Player - Canvas</h1>}
      {showForm &&
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div>
            <label>First Name</label>
            <input {...register("firstName")} />
          </div>

          <div>
            <label>Last Name</label>
            <input {...register("lastName")} />
          </div>

          <div>
            <label>Email_player1</label>
            <input {...register("Email_player1")} type="email" />
          </div>
          <div>
            <label>Whi u want to invite ? (enter their email) </label>
            <input {...register("Email_player2")} type="email" />
          </div>
          <input type="submit" />
        </form>
      }
      {/* {CanvasTitle && <h1>Ping Pong Player - Canvas</h1>} */}



      {/* {} */}
      {showCanvas && <Canvas data={datas.valueOf()} />}

    {/* </center> */}
    </div>

  );
}
