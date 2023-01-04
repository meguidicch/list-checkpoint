import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddContact from './Components/AddContact';
import EditContact from './Components/EditContact';
import Home from './Components/Home';
import ListContact from './Components/ListContact';
import NavContact from './Components/NavContact';

function App() {
  return (
   <div>
      <NavContact/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/listContacts' element={<ListContact/>}/>
        <Route path='/addContact' element={<AddContact/>}/>
        <Route path='/editContact/:id' element={<EditContact/>}/>
      </Routes>
   </div>
  );
}

export default App;
