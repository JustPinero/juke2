import React, { Component } from 'react';
import axios from 'axios';
import StatefulAlbums from './StatefulAlbums';
import AllArtists from './AllArtists';
import SingleAlbum from './SingleAlbum';
import SingleArtist from './SingleArtist';
import Sidebar from './Sidebar';
import Player from './Player';
import {HashRouter, Route, Switch} from 'react-router-dom';
import NotFound from './404'

export default class Main extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <HashRouter>
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar deselectAlbum={this.deselectAlbum} />
        </div>
        <div className="col-xs-10">
          <Switch>
            <Route exact path='/' component={StatefulAlbums}></Route>
            <Route exact path='/albums/:albumId' component={SingleAlbum}></Route>
            <Route exact path='/albums' component={StatefulAlbums}></Route>
            <Route exact path='/artists' component={AllArtists}></Route>
            <Route path='/artists/:artistId' component={SingleArtist}></Route>
            <Route path='/' render={ (routeProps)=> <NotFound location={routeProps.location}/>}/>
          </Switch>
        </div>
        <Player />
      </div>
    </HashRouter>
    );
  }
}
