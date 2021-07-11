import React, { Component } from 'react'
import { Col, Image } from 'react-bootstrap';
export default class Profile extends Component {
    state =
        {
            fullName: "Safa Eleuchi",
            bio: "Developer 2021",
            profession: "Full Stack JS",
            imgSrc: "./img/photoprofile.jpg"
        }
    render() {
        return (
            <div>
                <br />
                <Col xs={6} md={4}>
                    <Image src={this.state.imgSrc} roundedCircle style={{ width: 200 }} />
                </Col>
                <h1>{this.state.fullName}</h1>
                <h4>{this.state.bio}</h4>
                <h4>{this.state.profession}</h4>
            </div>
        );
    }
}
