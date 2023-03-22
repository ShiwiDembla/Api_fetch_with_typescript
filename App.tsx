
import { useState, useEffect } from 'react';
import mapUsersFromAPI from './api/users.dtomapper';
import  UserDTO  from './api/users.dto';

function App() {
  const [users, setUsers] = useState<UserDTO[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      const mappedData = mapUsersFromAPI(data);
      setUsers(mappedData);
    }

    fetchUsers();
  }, []);

  return (
    <div className="App">
<ul>
      {users.map((user) => (
        <li key={user.id}>
          title:
          {user.title} -
          body:
           {user.body}
        </li>
      ))}
    </ul>
    </div>
  );
}

export default App;
