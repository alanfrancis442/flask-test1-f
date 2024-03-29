"use client";
import { useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";


function Register() {


    const router = useRouter()
    const regHandeler = (e:Event)=>{
        e.preventDefault()
        router.push('/')
    }

    const [name, setname] = useState('')
    const [pass, setpass] = useState('')
    const [mail, setmail] = useState('')

    const nameHandel = (e:Event)=>{
      // console.log(name)
      setname(e.target.value)
    }

    const passHandel = (e:Event)=>{
      // console.log(pass)
      setpass(e.target.value)
    }

    const mailHandel = (e:Event)=>{
      // console.log(mail)
      setmail(e.target.value)
    }
    
    return ( <>
    <div className="h-screen">
    <section className="h-screen bg-[#eee]">
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black rounded-md">
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" onChange={nameHandel} value={name} />
                      <label className="form-label">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input value={mail} onChange={mailHandel} type="email" id="form3Example3c" className="form-control" />
                      <label className="form-label">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input value={pass} onChange={passHandel} type="password" id="form3Example4c" className="form-control" />
                      <label className="form-label">Password</label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button onClick={regHandeler} type="button" className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
    </> );
}

export default Register;