import React from 'react'
import Song from './Song'

const SongCollection = props => {

  let songs = props.songs.map(song => {
    let selectedClass = ""
      if (props.selectedSong === song.id) {
        selectedClass = "selected"
      }

    let handleSongSelect = () => props.handleSongSelect(song.id)

    return(
      <Song
        key={song.id}
        song={song}
        selectedClass = {selectedClass}
        handleSongSelect={handleSongSelect}
      />
    )
  })
  return(
    <ul>{songs}</ul>
  )
}

export default SongCollection
