import React from 'react'
import image from '../../assets/logo.png'

function TableChild({position, playedGames, won, draw, lost, goalsFor, goalsAgainst, points, crest, name}) {
    
  return (
    <div className='top-details'>
         <div className="number">{position}</div>
                <div className="team">
                    <img src={crest} alt="" />
                    <p>{name}</p>
                </div>
                <div className="mp">{playedGames}</div>
                <div className="w">{won}</div>
                <div className="d">{draw}</div>
                <div className="l">{lost}</div>
                <div className="gf">{goalsFor}</div>
                <div className="ga">{goalsAgainst}</div>
                <div className="pts">{points}</div>
    </div>
  )
}

export default TableChild