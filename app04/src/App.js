import {Fragment} from 'react';
import Banner from './components/Banner';
import AddressBook from './components/AddressBook';

const App = () => (
  <Fragment>
    <Banner title="Address Book 1.0" />
    <div className='container-fluid p-4'>
      <AddressBook />
    </div>
  </Fragment>
);

export default App;
