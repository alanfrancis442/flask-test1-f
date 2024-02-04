'use client'
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <>
    <div className="flex text-white justify-center h-screen items-center bg-slate-600">
        <form className="w-1/3 h-1/2">
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              // onChange={nameHandeler}
              // value={name}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              // value={pass}
              // onChange={passHandeler}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label">Check me out</label>
          </div>
          <button type="submit" className="mx-2 btn btn-primary">
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
