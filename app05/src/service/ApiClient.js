import axios from 'axios';

const API_URL = "http://localhost:9999/contacts";

export const getAllContacts = () => axios.get(API_URL);

export const getContactById = id => axios.get(API_URL + "/"+id);

export const addContact = contact => axios.post(API_URL,contact);

export const updateContact = contact => axios.put(API_URL+"/"+contact.id,contact);

export const deleteContactById = id => axios.delete(API_URL + "/"+id);