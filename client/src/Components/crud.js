import React, { Component } from 'react';
import Axios from "axios";


export default class crudForm extends Component {



    constructor(props) {
        super(props);
        this.state = {
            value: '',
            DataOutput: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //this.componentDidMount = this.componentDidMount.bind(this);
    }

    /*
    componentDidMount() {
        // Simple POST request with a JSON body using axios
        const test = (this.state.DataOutput);
        Axios.post("http://localhost:3001/insert", test)
            .then(response => this.setState({ tweetToSend: this.state.DataOutput }));
    }*/

    handleChange(event) {
        this.setState({ value: event.target.value });
        this.setState({ DataOutput: this.state.value })

    }
    handleSubmit(event) {
        // this.setState({ DataOutput: this.state.value })
        console.log(this.state.DataOutput)
        Axios.post("http://localhost:3001/insert", { tweetToSend: this.state.DataOutput })

        event.preventDefault();
    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.value} />
                    <input type="submit" value="submit tweet" />
                </form>

                {this.state.DataOutput}

            </div>
        )

    }
}