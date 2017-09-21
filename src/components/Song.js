import React from 'react'

const Song = props => {
  let name = props.song.name
  let artist = props.song.artist

  return(
    <li onClick={props.handleSongSelect} className={props.selectedClass}>{name} - {artist}</li>
  )
}

export default Song
