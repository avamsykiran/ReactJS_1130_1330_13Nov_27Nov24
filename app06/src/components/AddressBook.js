import { useState } from 'react';
import AddressBookHead from './AddressBookHead';
import AddressBookRow from './AddressBookRow';
import AddressBookForm from './AddressBookForm';

import { useQuery, useMutation } from '@apollo/client'
import * as queries from '../service/Queries';

const AddressBook = () => {
    
    let [contacts, setContacts] = useState(null);
    let [wait, setWait] = useState(true);
    let [errMsg, setErrMsg] = useState(null);

    useQuery( queries.ALL_CONTACTS_QRY , {
        onCompleted: data => {
            setContacts(data.allContacts); 
            setErrMsg(null); 
            setWait(false); 
        },
        onError: err => { 
            setErrMsg(err.message); 
            setWait(false) 
        }
    } );

    const [ triggerAddContactMutation ] = useMutation( queries.ADD_CONTACT_QRY , {
        onCompleted : data => {
            setContacts([...contacts, {...data.createContact} ]); 
            setErrMsg(null); 
            setWait(false); 
        },
        onError: err => { 
            setErrMsg(err.message); 
            setWait(false) 
        }
    } )

    const delContact = id => {
        if (window.confirm("Are you sure of deleting contact#"+id)) {
        }
    }

    const addContact = contact => { 
        setWait(true);
        triggerAddContactMutation({ variables: contact });
    }

    const updateContact = contact => {}
    
    const editContact = id => setContacts(contacts.map(c => c.id != id ? c : { ...c, isEditable: true }));

    const cancelEditContact = id => setContacts(contacts.map(c => c.id != id ? c : { ...c, isEditable: undefined }));

    return (
        <section className='border border-dark col-10 mx-auto p-4'>
            <h3>Address Book</h3>

            {
                wait && (
                    <div className='alert alert-info p-4 m-4'>
                        <strong>Please wait while executing your request or while loading data...!</strong>
                    </div>
                )
            }

            {
                errMsg && (
                    <div className='alert alert-danger p-4 m-4'>
                        <strong>{errMsg}</strong>
                    </div>
                )
            }

            <AddressBookHead />
            <AddressBookForm save={addContact} />
            {
                contacts && contacts.map(c => (
                    c.isEditable ?
                        <AddressBookForm key={c.id} contact={c} cancelEdit={cancelEditContact} save={updateContact} /> :
                        <AddressBookRow key={c.id} contact={c} editContact={editContact} del={delContact} />
                ))
            }
        </section>
    );
}

export default AddressBook;