import React, { Component } from 'react';
import GreetingDataService from '../service/GreetingDataService';

class HelloWorld extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          greeting: null,
        };
        this.getMessage = this.getMessage.bind(this)
    }

    getMessage(name){
        GreetingDataService.retrieveMessage(name)
            .then(
                response => {
                    console.log(response);
                    this.setState({ greeting: response.data.message })
                }
            )
    }

    componentDidMount(){
        this.getMessage('');
    }

    render() {
        return (
            <div>
                <div className='title'>{this.state.greeting}</div>
                <h3></h3>
            </div>
            
        )
    }

}

export default HelloWorld