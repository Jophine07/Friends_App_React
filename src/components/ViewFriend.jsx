import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewFriend =() => {
    const[data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("https://friendsapi-re5a.onrender.com/view").then(
            (Response)=>{
                changeData(Response.data)

            }
        ).catch().finally()


    }
    useEffect(() => {fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Friend NAme</th>
                                            <th scope="col">Friend Nickname</th>
                                            <th scope="col">Friend Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                    {
                        data.map(
                            (value,index)=>{
                              return  <tr>
                                <td>{value._id}</td>
                                <td >{value.name}</td>
                                <td>{value.friendNickName}</td>
                                <td>{value.DescribeYourFriend}</td>
                                <td>@fat</td>
                            </tr>

                            }
                        )
                    }
                                      

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewFriend