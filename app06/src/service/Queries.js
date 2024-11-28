import { gql } from '@apollo/client';

export const ALL_CONTACTS_QRY = gql(`
  query{
    allContacts{
      id
      name
      mobile
      mailId
    }
  }
`);

export const ADD_CONTACT_QRY = gql(`
mutation AddContact($name:String!,$mobile:String!,$mailId:String!){
  createContact(name:$name,mobile:$mobile,mailId:$mailId) {
    id
    name
    mobile
    mailId
  }
}    
`);

