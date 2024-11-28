import { useState } from 'react';

const AddressBookForm = ({ contact, save, cancelEdit }) => {

    let [id, setId] = useState(contact ? contact.id : 0);
    let [name, setName] = useState(contact ? contact.name : '');
    let [mobile, setMobile] = useState(contact ? contact.mobile : '');
    let [mailId, setMailId] = useState(contact ? contact.mailId : '');
    let isEditable = contact ? contact.isEditable : undefined;

    const clearForm = () => {
        setId(0);
        setName('');
        setMobile('');
        setMailId('');
    };

    const formSubmitted = e => {
        e.preventDefault();
        //go for validation logic....
        save({ id, name, mobile, mailId, isEditable });
        clearForm();
    }

    return (
        <form className="row border-bottom border-dark p-2" onSubmit={formSubmitted}>
            <div className="col-1">
                <input type='number' className='form-control' value={id} placeholder='id' readOnly={true} />
            </div>
            <div className="col">
                <input type='text' className='form-control' value={name} placeholder='Full Name'
                    onChange={e => setName(e.target.value)} />
            </div>
            <div className="col-2 text-center">
                <input type='text' className='form-control' value={mobile} placeholder='Mobile'
                    onChange={e => setMobile(e.target.value)} />
            </div>
            <div className="col">
                <input type='text' className='form-control' value={mailId} placeholder='Email Id'
                    onChange={e => setMailId(e.target.value)} />
            </div>
            <div className="col-2 text-center">
                <button type="submit" className="btn btn-sm btn-primary m-1" >
                    {isEditable ? "SAVE" : "ADD"}
                </button>
                <button type="button" className="btn btn-sm btn-danger"
                    onClick={e => isEditable ? cancelEdit(id) : clearForm()} >
                    CANCEL
                </button>
            </div>
        </form>
    );
}

export default AddressBookForm;