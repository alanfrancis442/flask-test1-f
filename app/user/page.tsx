"use client";
import "bootstrap/dist/css/bootstrap.css";
import { io } from "socket.io-client";
import Message from "./messasge";
import { useEffect,useState } from "react";

function UserPage() {

  const [msgcloud, setmsgcloud] = useState("")
  const socket = io("http://localhost:5000/",{
    autoConnect: false,
  });

  useEffect(()=>{
    socket.connect();
  },[])

  socket.on("thanks", (e) => {
    console.log(e);
  });
  const sodisconnect = async () => {
    // const response = await fetch('http://localhost:5000/api',)
    socket.disconnect();
  };

  const sendmsg = () => {
    socket.emit("my_message", "form the user");
  };

  const sendmessage = (val: string) => {
    console.log("function called",val);
    socket.emit('sendmsg',val)
  };

  socket.on('recive',(e)=>{
    recivemessage(e)
  })

  const recivemessage = (e)=>{
    console.log("message recived:",e)
    setmsgcloud(e.message)
  }
  return (
    <>
      <div>
        Welocome: <br />
        <div className="">
          <button onClick={sendmsg} type="button" className="btn btn-primary">
            Primary
          </button>
          <button
            onClick={sodisconnect}
            type="button"
            className="btn btn-danger"
          >
            Danger
          </button>
          <Message msgfun={sendmessage} msgcl={msgcloud} />
        </div>
      </div>
    </>
  );
}

export default UserPage;
