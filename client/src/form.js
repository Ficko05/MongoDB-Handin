import React, {Component} from 'react';

export default class NameForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
          dOutput: ''
        };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
    // CALL FETC FUNCTION AND USE VALUE (INPUT FIELD) AS PARAMETER HERE
      this.setState({dOutput: this.state.value});    
      event.preventDefault();
    }

    // IMPLEMENT FETCH FUNCTION HERE TO MAKE RELEVANT MONGODB QURIES
  
    render() {
      return (
          <div>
        <form onSubmit={this.handleSubmit}>        <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
          <input type="submit" value="Submit" />
        </form>
       
            {this.state.dOutput}
        
          </div>
      );
    }
    
  }
