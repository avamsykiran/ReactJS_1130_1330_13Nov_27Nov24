import { useState } from 'react';
import AddressBookHead from './AddressBookHead';
import AddressBookRow from './AddressBookRow';
import AddressBookForm from './AddressBookForm';

const AddressBook = () => {
    
    let [contacts, setContacts] = useState([
        { id: 1, name: 'Vamsy', mobile: '9052224753', mailId: 'a.vamc.it@gmail.com' },
        { id: 2, name: 'Varun', mobile: '9052224755', mailId: 'varun@gmail.com' },
        { id: 3, name: 'Vinay', mobile: '9052224754', mailId: 'vinay@gmail.com' },
        { id: 4, name: 'Vikram', mobile: '9052224752', mailId: 'vikram@gmail.com' },
        { id: 5, name: 'Vinitha', mobile: '9052224751', mailId: 'vinitha@gmail.com' }
    ]);

    let [nextId, setNextId] = useState(6);

    const addContact = c => {
        setContacts([...contacts,{...c,id:nextId}]);        
        setNextId(nextId + 1);
    }

    const delContact = id => setContacts(contacts.filter(c => c.id != id));

    const editContact = id => setContacts(contacts.map(c => c.id != id ? c : { ...c, isEditable: true }));

    const cancelEditContact = id => setContacts(contacts.map(c => c.id != id ? c : { ...c, isEditable: undefined }));

    const updateContact = cont => setContacts(contacts.map(c => c.id != cont.id ? c : { ...cont, isEditable: undefined }));

    return (
        <section className='border border-dark col-10 mx-auto p-4'>
            <h3>Address Book</h3>
            <AddressBookHead />
            <AddressBookForm save={addContact} />
            {
                contacts.map(c => (
                    c.isEditable ?
                    <AddressBookForm key={c.id} contact={c} save={updateContact} cancelEdit={cancelEditContact} /> :
                        <AddressBookRow key={c.id} contact={c} delContact={delContact} editContact={editContact} />
                ))
            }
        </section>
    );
}

export default AddressBook;