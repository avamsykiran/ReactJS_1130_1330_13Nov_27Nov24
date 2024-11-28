import {Component} from 'react';

class AddressBook extends Component {

    constructor(){
        super();
        this.state={
            contacts:[
                {id:1,name:'Vamsy',mobile:'9052224753',mailId:'a.vamc.it@gmail.com'},
                {id:2,name:'Varun',mobile:'9052224755',mailId:'varun@gmail.com'},
                {id:3,name:'Vinay',mobile:'9052224754',mailId:'vinay@gmail.com'},
                {id:4,name:'Vikram',mobile:'9052224752',mailId:'vikram@gmail.com'},
                {id:5,name:'Vinitha',mobile:'9052224751',mailId:'vinitha@gmail.com'}
            ]
        }
    }

    render(){
        return (
            <section className='box'>
                <h3>Address Book</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Contact Id</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Mail Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.contacts.map( c => (
                                <tr>
                                    <td>{c.id}</td>
                                    <td>{c.name}</td>
                                    <td>{c.mobile}</td>
                                    <td>{c.mailId}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        );
    }
}

export default AddressBook;