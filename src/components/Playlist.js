import React from 'react'

const Playlist = props => {
  let name = props.playlistData.name

  return(
    <li className={props.classSelected}> {name} </li>
  )
}

//const Playlist = props =>
//  <li>{props.playlistData.name}</li>

export default Playlist
