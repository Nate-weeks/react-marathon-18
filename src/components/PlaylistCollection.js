import React from 'react'
import Playlist from './Playlist'

class PlaylistCollection extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let playlists = this.props.playlists.map(playlist => {
      let classSelected = ""
      if(this.props.selectedPlaylistId === playlist.id) {
        classSelected = "selected"
      }
      return(
        <Playlist
        key={playlist.id}
        playlistData={playlist}
        classSelected = {classSelected}
        />
      );
    });

    return(
      <div>
        <ul> {playlists} </ul>
      </div>
    )
  }
}

export default PlaylistCollection
