import { Fragment } from 'react';
import Counter from "./components/Counter";
import Header from "./components/Header";
import AddressBook from './components/AddressBook';
import Loan from './components/Loan';
import Experience from './components/Experience';

const App = () => (
    <Fragment>
        <Header appTitle="React SPA 1.0" />
        <Counter />
        <AddressBook />
        <Loan />
        <Experience />
    </Fragment>
)

export default App;
