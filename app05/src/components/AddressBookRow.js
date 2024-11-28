
const AddressBookRow = ({ contact, editContact,del }) => (
    <div className="row border-bottom border-dark p-2 ">
        <div className="col-1 text-end">{contact.id}</div>
        <div className="col">{contact.name}</div>
        <div className="col-2 text-center">{contact.mobile}</div>
        <div className="col">{contact.mailId}</div>
        <div className="col-2 text-center">
            <button type="button"
                className="btn btn-sm btn-secondary me-1" 
                onClick={e => editContact(contact.id)}>
                EDIT
            </button>
            <button type="button"
                className="btn btn-sm btn-danger"
                onClick={e => del(contact.id)}>
                DELETE
            </button>
        </div>
    </div>
);

export default AddressBookRow;