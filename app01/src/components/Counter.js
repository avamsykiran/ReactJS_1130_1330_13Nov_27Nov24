import {Component} from 'react';

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count:10
        };
    }

    raiseUp = () => this.setState({count:this.state.count+1})

    bringDown = () => this.setState({count:this.state.count-1})

    render(){
        return (
            <section className='box'>
                <h4> The count is {this.state.count} </h4>
                <button type='button' onClick={this.raiseUp} >Raise Up</button>
                <button type='button' onClick={this.bringDown} >Bring Down</button>
            </section>
        );
    }
}

export default Counter;