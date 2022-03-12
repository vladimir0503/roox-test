import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SidePanel from './SidePanel/SidePanel';
import UserList from '../pages/UserList/UserList';
import UserProfile from '../pages/UserProfile/UserProfile';
import { loadUsersList } from '../../api/api';

import './App.scss';

function App(): JSX.Element {
  const [users, setUsers] = React.useState<[]>([]);
  const [user, setUser] = React.useState<{} | null>(null);

  const getUsers = async () => {
    const users = await loadUsersList();
    setUsers(users);
  };

  const sort = (keyOne: string, keyTwo: string) => {
    setUsers(users => [...users.sort((a: any, b: any) => (a[keyOne][keyTwo] > b[keyOne][keyTwo]) ? 1 : -1)]);
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='App'>
      <SidePanel sort={sort} />
      <Router>
        <Routes>
          <Route path='/' element={<UserList users={users} />}/>
          <Route path='/user/:id' element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;