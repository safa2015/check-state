import React, { Component } from 'react'

export default class Compteur extends Component {
    constructor(props) {
        super(props)

        this.state = {
            compteur: 0,
            memory: null
        }
    }
    componentDidMount = () => {
        this.setState({
            memory: setInterval(() => {
                this.setState({ compteur: this.state.compteur + 1 })
            }, 1000)
        })

    }
    componentDidUpdate() {
        console.log(this.state.memory)
    }

    componentWillUnmount() {
        clearInterval(this.state.memory)
    }
    render() {
        return (
            <div>
                <h2>{this.state.compteur}</h2>
            </div>
        )
    }
}
