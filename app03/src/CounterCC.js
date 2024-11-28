import {Component} from 'react';

class CounterCC extends Component {
    constructor(){
        super();
        this.state={
            laps:0,
            trips:0
        };
    }

    componentDidMount(){
        setTimeout( () => { this.setState({laps:1})}, 500);
    }

    componentDidUpdate(){
        let {laps,trips} = this.state;

        if(laps===10){
            this.setState({laps:0,trips:trips+1});
        }else if(laps<0 && trips>0) {
            this.setState({laps:9,trips:trips-1});
        }else if(laps<0) {
            this.setState({laps:0});
        }
    }

    render(){

        let {laps,trips} = this.state;

        return (
            <div className='card card-primary m-4 p-4'>
                <h3> {laps} <small>LAPS</small>  {trips} <small>TRIPS</small> </h3>
                <div className='card-foot text-end'>
                <button type="button" onClick={e => this.setState({laps:laps-1})} className='btn btn-sm btn-danger me-2'> Step Down </button>
                <button type="button" onClick={e => this.setState({laps:laps+1})} className='btn btn-sm btn-secondary'> Step Up </button>
                </div>
            </div>
        );
    }
}

export default CounterCC;