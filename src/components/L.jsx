import React, { useState } from 'react'
import Navbar from './Navbar'

const L = () => {
    const[input,changeinput]=useState(
        {
            username:"",password:""
        }
    )
    const inputhandler =(event) =>
    {
        changeinput({...input,[event.target.name]:event.target.value})
    }
    const readvalues =()=>
    {
        console.log(input)
    }
  return (
    <div>
        <Navbar />
      <div className="container">
        <div className="row">
            <div className="col">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl col-xxl-12">
                    <div className="row g-3 col">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Username</label>
                            <input type="text" className="form-control" name='username' value={input.username} onChange={inputhandler}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Password</label>
                            <input type="text" className="form-control" name='Password' value={input.password} onChange={inputhandler}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readvalues}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default L
