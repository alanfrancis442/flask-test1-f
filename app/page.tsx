'use client'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()
  const [name, setname] = useState('')
  const nameHandeler = (e:Event)=>{
    console.log(name)
    setname(e.target.value)
  }

  const [pass, setpass] = useState('')
  const passHandeler = (e:Event)=>{
    // console.log(pass)
    setpass(e.target.value)
  }

  const user_login = async(e:Event)=>{
    e.preventDefault()
    const response = await fetch('http://127.0.0.1:5000/api',{
      // method:"POST",
      headers:{
        'name':name,
        "pass":pass,
      }
    })
    const req_data = await response.json();
    if("ok" == req_data.passed){
      router.push('/user')
    }
    console.log('request sucessfull',req_data.message)
  }

  return (
    <>
    <div className="flex text-white justify-center h-screen items-center bg-slate-600">
        <form className="w-1/3 h-1/2">
          <div className="form-group">
            <label>Email address</label>
            <input required
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={nameHandeler}
              value={name}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input required
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={pass}
              onChange={passHandeler}
            />
          </div>
          <div className="form-check">
            <input required
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label">Check me out</label>
          </div>
          <button onClick={user_login} type="submit" className="mx-2 btn btn-primary">
            Submit
          </button>
          <button type="submit" className="mx-2 btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
