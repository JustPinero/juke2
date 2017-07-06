import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class AllAlbums extends Component {
  render () {
    const albums = this.props.albums;
    console.log("ALL ALBUMS IS RUNNING!!!", albums)
    return (
      <div>
        <h3>Albums</h3>
        <div className="row">
        {
          albums.map(album => (
            <div className="col-xs-4" key={ album.id }>
              <Link to={`/albums/${album.id}`} className="thumbnail">
                <img src={ album.imageUrl } />
                <div className="caption">
                  <h5>
                    <span>{ album.name }</span>
                  </h5>
                  <small>{ album.songs.length } songs</small>
                </div>
              </Link>
            </div>
          ))
        }
        </div>
      </div>
    );
  }
}
