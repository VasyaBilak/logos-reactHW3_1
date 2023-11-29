import { useEffect, useState } from 'react';
import './App.css';
import UsersComponent from './components/UsersComponent/UsersComponent';

const App = () => {
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
      getUsers();
  }, [])

  const getUsers = async () => {
      try {
          let response = await fetch('https://jsonplaceholder.typicode.com/users');

          let data = await response.json();
          setUsers(data);
      } catch {}
  }

  return (
    <div className='app'>
      <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
        <UsersComponent  users={users}/>
      </div>
    </div>
  );
}

export default App;
