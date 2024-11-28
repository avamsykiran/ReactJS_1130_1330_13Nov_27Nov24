import { Component } from 'react';

class AddressBookForm extends Component {

    constructor(props) {
        super(props);
        this.state = props.contact ? {...props.contact}: {
            id: 0,
            name: '',
            mobile: '',
            mailId: ''
        }
    }

    clearForm = () => this.setState({
        id: 0,
        name: '',
        mobile: '',
        mailId: ''
    });

    formSubmitted = e => {
        e.preventDefault();
        this.props.save(this.state);
        this.clearForm();
    }

    render() {

        let {id,name,mobile,mailId,isEditable} = this.state;

        return (
            <form className="row border-bottom border-dark p-2" onSubmit={this.formSubmitted}>
                <div className="col-1">
                    <input type='number' className='form-control' value={id} placeholder='id' readOnly={true} />
                </div>
                <div className="col">
                    <input type='text' className='form-control' value={name} placeholder='Full Name' 
                    onChange={e => this.setState({name:e.target.value})}/>
                </div>
                <div className="col-2 text-center">
                    <input type='text' className='form-control' value={mobile} placeholder='Mobile' 
                    onChange={e => this.setState({mobile:e.target.value})}/>
                </div>
                <div className="col">
                    <input type='text' className='form-control' value={mailId} placeholder='Email Id' 
                    onChange={e => this.setState({mailId:e.target.value})}/>
                </div>
                <div className="col-2 text-center">
                    <button type="submit" className="btn btn-sm btn-primary m-1" >
                        {isEditable?"SAVE":"ADD"}
                    </button>
                    <button type="button" className="btn btn-sm btn-danger" 
                        onClick={ e =>  isEditable?this.props.cancelEdit(id):this.clearForm() } >
                        CANCEL
                    </button>
                </div>
            </form>
        );
    }
}

export default AddressBookForm;