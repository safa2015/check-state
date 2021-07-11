import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Profile from './Component/Profile';
import Compteur from './Component/Compteur';

export default class App extends Component {
    state = { etatBt: false, }
    handClick = () => {
        this.setState({
            etatBt: !this.state.etatBt
        })
    }

    render() {
        return (
            <div>
                <Button onClick={this.handClick}>{this.state.etatBt ? "Masqué le Profile" : "Affiche le Profile"}</Button>
                {this.state.etatBt ? <div><Profile /><br />Compteur :  <Compteur /></div> : ""}

            </div >
        );
    }
}
