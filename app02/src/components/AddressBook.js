import { Component } from 'react';
import AddressBookHead from './AddressBookHead';
import AddressBookRow from './AddressBookRow';
import AddressBookForm from './AddressBookForm';

class AddressBook extends Component {

    constructor() {
        super();
        this.state = {
            contacts: [
                { id: 1, name: 'Vamsy', mobile: '9052224753', mailId: 'a.vamc.it@gmail.com' },
                { id: 2, name: 'Varun', mobile: '9052224755', mailId: 'varun@gmail.com' },
                { id: 3, name: 'Vinay', mobile: '9052224754', mailId: 'vinay@gmail.com' },
                { id: 4, name: 'Vikram', mobile: '9052224752', mailId: 'vikram@gmail.com' },
                { id: 5, name: 'Vinitha', mobile: '9052224751', mailId: 'vinitha@gmail.com' }
            ],
            nextId: 6
        }
    }

    addContact = c => this.setState({ 
        contacts: [...this.state.contacts, { ...c, id: this.state.nextId }], 
        nextId: this.state.nextId + 1 
    })

    delContact = id => this.setState({ contacts: this.state.contacts.filter(c => c.id != id) })

    editContact = id => this.setState({ contacts: this.state.contacts.map(c => c.id != id?c:{...c,isEditable:true}) })

    cancelEditContact = id => this.setState({ contacts: this.state.contacts.map(c => c.id != id?c:{...c,isEditable:undefined}) })

    updateContact = cont => this.setState({ contacts: this.state.contacts.map(c => c.id != cont.id?c:{...cont,isEditable:undefined}) })

    render() {
        return (
            <section className='border border-dark col-10 mx-auto p-4'>
                <h3>Address Book</h3>
                <AddressBookHead />
              
                {
                    this.state.contacts.map(c => (
                        c.isEditable? 
                            <AddressBookForm key={c.id} contact={c} save={this.updateContact} cancelEdit={this.cancelEditContact} /> : 
                            <AddressBookRow key={c.id} contact={c} delContact={this.delContact}  editContact={this. editContact}/>
                    ))
                }
            </section>
        );
    }
}

export default AddressBook;