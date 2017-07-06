import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios';
import AllAlbums from '../components/AllAlbums';
import { Link } from 'react-router-dom';
import {HashRouter, Route} from 'react-router-dom';
export default class SingleArtist extends Component {

  constructor (props) {
    super(props);
    this.state = {
      artist: {},
      artistAlbums: [],
      artistSongs: []
    };
  }

  componentDidMount () {
    const artistId = this.props.match.params.artistId;
    console.log(artistId);
    const artists = axios.get(`/api/artists/${artistId}`)
    const artistAlbums = axios.get(`/api/artists/${artistId}/albums`);
    const artistSongs = axios.get(`/api/artists/${artistId}/songs`);

    Promise.all([artists, artistAlbums, artistSongs])
    .then(promises =>{
      this.setState({ artist: promises[0].data })
      this.setState({ artistAlbums: promises[1].data })
      this.setState({ artistSongs: promises[2].data })
    })
    .catch(console.error);

  }

  render () {
    const artist = this.state.artist;
    const artistAlbums = this.state.artistAlbums;
    const artistSongs = this.state.artistSongs;
    return (
      // <div className="album">
      //   <h1>{artist.name}</h1>
      //   <AllAlbums albums ={artistAlbums} />
      //   <Songs songs={artistSongs} />
      // </div>
    <div>
      <h3>{ artist.name }</h3>
      <ul className="nav nav-tabs">
        <li><Link to={'/artistAlbums'}>ALBUMS</Link></li>
        <li><Link to="TODO">SONGS</Link></li>
      </ul>

      {
        <HashRouter>
          <Route path="/artistAlbums" render={() => <AllAlbums albums={artistAlbums} />} />
        </HashRouter>
      }
    </div>
    );
  }
}
