import React, { useEffect, useState } from 'react'
import "./home.css"
import LOGO from "../../assets/logo.png"
import axios from 'axios'
import { Link } from 'react-router-dom'



const Home = () => {
  const config = {
    headers:{
      "X-Auth-Token" : '449aef89ca814dbb9113f739fe9ef7de'
    }}
 
       const [posts, setPosts] = useState([])
      //  const reverse = posts.reverse()
      //  const slices = reverse.slice(-10)
       const slices = posts.splice(0,10)

    useEffect(() =>{
        axios.get('/competitions', config)
        .then(res =>{
            setPosts(res.data.competitions)
             console.log(res.data.competitions)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

  return (
    <div className='container'>
        <header>
            <div>
                <img src={LOGO} alt="" />
            </div>
        </header>

        <div className="league-container">
            <h3>All Competiions</h3>
            <div className="leagues">

              {
              slices.map(post => {

                 const  {name, code}   = post;
                 
                 const {flag} = post.area
                 const countyName = post.area.name
                 console.log(flag)
                 console.log({code});
                 console.log({slices});
                 return(
                <Link to='/league' state= {{league: code}}>
                <div className="league">
                  <div className="image">
                  <img src={flag} alt="" />
                  </div>
                  
                  
                  <div className="league-details">
                    <h4><strong>{name}</strong></h4>
                    <span>{countyName}</span>
                  </div>
                </div>
              </Link>
               ) })
            }  
            </div>
        </div>
    </div>
  )
}

export default Home