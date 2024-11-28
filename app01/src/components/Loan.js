import {Component} from 'react';

class Loan extends Component {

    constructor(){
        super();
        this.state={
            amt:0,
            roi:0,
            term:0,
            emi:0
        };
    }

    computeEmi = e => {
        
        e.preventDefault();

        //time is in months
        //rate must be roi/12*100
        //EMI = (principal * rate * (1 + rate) ^ time) / ((1 + rate) ^ time - 1)
        
        let {amt,roi,term,emi} = this.state;
        let rate = roi/(12*100);
        this.setState({emi:(amt * rate * Math.pow(1+rate,term)) / (Math.pow(1+rate,term)-1)});
    }

    render(){

        let {amt,roi,term,emi} = this.state;

        return (
            <section className='box'>
                <h3>A Loan Calc</h3>

                <form onSubmit={this.computeEmi}>
                    <div>
                        <label>Loan Amount</label>
                        <input type="number" value={amt} onChange={ e => this.setState({amt:Number(e.target.value)})} />
                    </div>
                    <div>
                        <label>Rate Of Interest</label>
                        <input type="decimal" value={roi} onChange={ e => this.setState({roi:parseFloat(e.target.value)})} />
                    </div>
                    <div>
                        <label>Term (in months)</label>
                        <input type="number" value={term} onChange={ e => this.setState({term:Number(e.target.value)})} />
                    </div>
                    <button>Compute</button>
                </form>

                <p> The EMI is <strong>{emi}</strong> </p>
            </section>
        );
    }
}

export default Loan;
