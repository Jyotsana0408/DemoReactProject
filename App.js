import React, { useState } from 'react';

import AddUser from './components/AddUser';
import UsersList from './components/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge, uCollege) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString(), college: uCollege }
      ];
    });
  };

  return (
    <React.Fragment>

      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />

    </React.Fragment>
  );
}

export default App;