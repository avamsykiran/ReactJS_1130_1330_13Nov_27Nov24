import {Component} from 'react';

class Experience extends Component {

    constructor(){
        super();
        this.state={
            joinDate:new Date().toISOString().substring(0,10),
            maxService:60,
            experience:0,
            retireDate:0
        };
    }

    compute = e => {
        
        e.preventDefault();

        let {joinDate,maxService} = this.state;

        let today = new Date();
        let jd= new Date(joinDate); // joinDate is a string so converting it into Date object.

        this.setState({experience:today.getFullYear()-jd.getFullYear(),
            retireDate:new Date(jd.getFullYear()+maxService,jd.getMonth(),jd.getDate()).toISOString().substring(0,10)
        })
    }

    render(){

        let {joinDate,maxService,experience,retireDate} = this.state;

        return (
            <section className='box'>
                <h3>Date Computations</h3>

                <form onSubmit={this.compute}>
                    <div>
                        <label>Joining Date</label>
                        <input type="date" value={joinDate} onChange={ e => this.setState({joinDate:e.target.value})} />
                    </div>
                    <div>
                        <label>Maximum Service</label>
                        <input type="number" value={maxService} onChange={ e => this.setState({maxService:Number(e.target.value)})} />
                    </div>                    
                    <button>Compute</button>
                </form>

                <p> Current Experience: <strong>{experience} yrs</strong></p>
                <p> Retirment Date : <strong>{retireDate}</strong></p>

            </section>
        );
    }
}

export default Experience;
