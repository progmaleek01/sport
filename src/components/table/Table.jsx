import React, { useEffect, useState } from 'react'
import './table.css'
import LOGO from "../../assets/logo.png"
import { Link, useParams, useLocation } from 'react-router-dom'
import axios from 'axios'
import TableChild from './TableChild'

function Table(props) {
    const {handle} = useParams()
    const location = useLocation()
    const {league} = location.state

    const config = {
        headers:{
          "X-Auth-Token" : '449aef89ca814dbb9113f739fe9ef7de'
        }}

    const [posts, setPosts] = useState([])
    const [leagueName, setLeagueName] = useState()
    //  const reverse = posts.reverse()
    //  const slices = reverse.slice(-10)
    //  const slices = posts.splice(0,10)

  useEffect(() =>{
      axios.get(`/competitions/${league}/standings`, config)
      .then(res =>{
          setPosts(res.data.standings[0].table)
           console.log(res.data.competition.name)
           setLeagueName(res.data.competition.name) 
      })
      .catch(err => {
          console.log(err)
      })
  },[])



    const toggle = () =>{
        document.querySelector('.span-stand').classList.toggle('active')
        document.querySelector('.span-match').classList.toggle('active')
    }

  return (
    <div className='container'>
        <header>
            <div>
                <img src={LOGO} alt="" />
            </div>
        </header>

        <div className="league-container">
            <div className="head">
                <div className="effect-contain">
                    <Link to='/' style={{textDecoration: 'none'}}>
                    <h3 className='all'>All Competiions</h3>
                    </Link>
                </div>
                <span> / </span>
                <h3 className=''>{leagueName}</h3>
            </div>

            <div className="sub-header">
                <h1>{leagueName}</h1>
            </div>

            <div className="color">
                <button><span onClick={toggle} className=' active span-stand'>STANDING</span></button>
                <button> <span onClick={toggle} className='span-match'>MATCHES</span> </button>
            </div>

            <div className="table">
                <div className="top-details">
                    <div className="number"></div>
                    <div className="team">Team</div>
                    <div className="mp">MP</div>
                    <div className="w">W</div>
                    <div className="d">D</div>
                    <div className="l">L</div>
                    <div className="gf">GF</div>
                    <div className="ga">GA</div>
                    <div className="pts">Pts</div>
                </div>

                {
                    posts.map(post => {
                        const {position, playedGames, won, draw, lost, goalsFor, goalsAgainst, points} = post
                        const {crest, name} = post.team
                        console.log(post)
                        return(
                        <TableChild
                        position={position} playedGames={playedGames} won={won} points={points} name={name}
                        draw={draw} lost={lost} goalsFor={goalsFor} goalsAgainst={goalsAgainst} crest={crest}
                        />
                        )
                    })

                }
            </div>
        </div>
    </div>
  )
}

export default Table



          {/* {
          slices.map(post => {

             const  {name, code}   = post;
             
             const {flag} = post.area
             const countyName = post.area.name
             console.log(flag)
             console.log({name});
             return(
              
            <div className="league">
            <div className="image">
            <img src={flag} alt="" />
            </div>
            
            <div className="league-details">
              <h4><strong>{name}</strong></h4>
              <span>{countyName}</span>
            </div>
          </div>

             

           ) })
        }   */}


