import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const [input,changeinput]=useState()

    const [User, changeUser] = useState(

        
          {"status":"success","data":[]}
        

    )
const fetchdata = () => {
axios.get("http://18.144.111.41/view_all_students.php").then(
    (response)=>{
        changeUser(response.data)
    }
).catch()
}

useEffect(() =>{fetchdata()},[])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Roll number</th>
                                        <th scope="col">Admission number</th>
                                        <th scope="col">College</th>
                                    </tr>
                                </thead>
                                {
                                    User.data.map(
                                        (value, index) => {
                                            return (

                                                <tbody>
                                                    <tr>
                                            
                                                        <td>{value.name}</td>
                                                        <td>{value.roll_number}</td>
                                                        <td>{value.admission_number}</td>
                                                        <td>{value.college}</td>
                                                    </tr>
                                                </tbody>

                                            )
                                        }
                                    )
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall