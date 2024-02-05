'use client'
import { useState } from "react";

function Message(props) {

    const [message, setmessage] = useState('')

    const messageHandeler = (e:Event)=>{
        setmessage(e.target.value)
        console.log(message)
    }

    const send_msg = ()=>{
        console.log('button clicked')
        props.msgfun()
    }
    return ( 
        <>
        <section className="bg-[#eee] h-screen">
  <div className="container py-5">

    <div className="row d-flex justify-content-center">
      <div className="col-md-8 col-lg-6 col-xl-4">

        <div className=" rounded-sm card" id="chat1">
          <div
            className="card-header d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0">
            <i className="fas fa-angle-left"></i>
            <p className="mb-0 fw-bold">Live chat</p>
            <i className="fas fa-times"></i>
          </div>
          <div className="card-body">
            <div className="messages min-h-[20rem] border-gray-300 border-1 p-2 my-2 rounded-lg">
                gjig
            </div>

            <div className="form-outline">
              <textarea onChange={messageHandeler} value={message} className="form-control" id="textAreaExample" rows="4"></textarea>
              <label className="form-label">Type your message</label>
              <button onClick={send_msg} type="button" className="btn btn-primary">send</button>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</section>
        </>
     );
}

export default Message;