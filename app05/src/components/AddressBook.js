import { useState, useEffect } from 'react';
import AddressBookHead from './AddressBookHead';
import AddressBookRow from './AddressBookRow';
import AddressBookForm from './AddressBookForm';
import * as apiClient from '../service/ApiClient';

const AddressBook = () => {

    let [contacts, setContacts] = useState(null);
    let [wait, setWait] = useState(true);
    let [errMsg, setErrMsg] = useState(null);

    const loadContacts = () => {
        setWait(true);
        setErrMsg(null);
        apiClient.getAllContacts()
            .then(resp => {
                setContacts(resp.data);
                setWait(false);
            })
            .catch(err => {
                setWait(false);
                console.error(err);
                setErrMsg("Sorry! Unable to retrive data! Please retry later!");
            })
    }

    const delContact = id => {
        if (window.confirm("Are you sure of deleting contact#"+id)) {
            setWait(true);
            setErrMsg(null);
            apiClient.deleteContactById(id)
                .then(resp => {
                    //refresh the entire local contacts array from server by calling 
                    //loadContacts(); 
                    //or remove the record from local contacts array
                    setContacts(contacts.filter(c => c.id != id));
                    setWait(false);
                })
                .catch(err => {
                    setWait(false);
                    console.error(err);
                    setErrMsg("Sorry! Unable to delete data! Please retry later!");
                })
        }
    }

    const addContact = contact => {
        setWait(true);
        setErrMsg(null);
        apiClient.addContact(contact)
            .then(resp => {
                //refresh the entire local contacts array from server by calling 
                //loadContacts(); 
                //or push the new record into local contacts array
                setContacts([...contacts,{...resp.data}]);
                setWait(false);
            })
            .catch(err => {
                setWait(false);
                console.error(err);
                setErrMsg("Sorry! Unable to save data! Please retry later!");
            })
    }

    const updateContact = contact => {
        contact.isEditable=undefined;
        setWait(true);
        setErrMsg(null);
        apiClient.updateContact(contact)
            .then(resp => {
                //refresh the entire local contacts array from server by calling 
                //loadContacts(); 
                //or replace the old record with the new record in the local contacts array
                setContacts(contacts.map(c => c.id==resp.data.id?{...resp.data}:c));
                setWait(false);
            })
            .catch(err => {
                setWait(false);
                console.error(err);
                setErrMsg("Sorry! Unable to save data! Please retry later!");
            })
    }

    useEffect(() => loadContacts(), []); //componentDidMount

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