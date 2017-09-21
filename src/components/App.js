import React from 'react';
import PlaylistCollection from './PlaylistCollection';
import SongCollection from './SongCollection';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSongId: props.data.selectedSongId
    }
    this.handleSongSelect = this.handleSongSelect.bind(this)
  }

  handleSongSelect(id) {
    this.setState({selectedSongId: id})
  }

  render() {
    let data = this.props.data

    let selectedPlaylistSongIds = data.playlists[this.props.data.selectedPlaylistId-1].songs;

    let filterById = (obj) => {
      return selectedPlaylistSongIds.includes(obj.id);
    }

    let selectedPlaylistSongs = data.songs.filter(filterById);

    return (
      <div className="App row">
        <div>
          <h1>Playlist</h1>
          <PlaylistCollection
            playlists={data.playlists}
            selectedPlaylistId= {data.selectedPlaylistId}
          />
        </div>
        <div>
          <h1>Our Songs</h1>
          <SongCollection
            songs={selectedPlaylistSongs}
            selectedSong={this.state.selectedSongId}
            handleSongSelect={this.handleSongSelect}
          />
        </div>
      </div>
    );
  }
}

export default App;
