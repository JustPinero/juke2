import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios';

export default class SingleAlbum extends Component {

  constructor (props) {
    super(props);
    this.state = {
      selectedAlbum: {}
    };
  }

  componentDidMount () {
    const albumId = this.props.match.params.albumId;
    axios.get(`/api/albums/${albumId}`)
      .then(res => res.data)
      .then(album => {
        // console.log('THIS IS THE THE ALBUM LOOK AT ME', album)
        this.setState({ selectedAlbum: album })
      });
  }

  render () {
    const album = this.state.selectedAlbum;
    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
            <a href={`mailto:someone@example.com?Subject=${album.name}&body=Check%20out%20this%20groovy%20album%20http://localhost:1337${this.props.location.pathname}`} target="_top">
              <span className="glyphicon glyphicon-share"></span>
            </a>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs songs={album.songs} />
      </div>
    );
  }
}
