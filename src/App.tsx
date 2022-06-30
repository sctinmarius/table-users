import { useEffect, useState } from "react";
/**
 * 1. Create a REACT component
 * 2. Render HTML <table>
 * 3. Create an interface for data from source public/data.json "data.json"
 * 4. Get data from public/data.json using async/await
 * 4.1. use useState hook to store data
 * 5. Render fetched data within the HTML Table
 * 5.1. Render each object in a new table row
 * 5.2. Render header cells generically by object keys
 * 5.3. Iterate through data and render content cells
 * 5.3.1. Roles cell displays given roles as strings, separated by commas
 * 6. Display the image (url: https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745 ) on the right side next to the table (using Flexbox).
 * 6.1. Table should fill 50% of the page horizontally.
 * 6.2. Image should be centered horizontally in the right 50% of the page.
 * 6.3. Image and the table should be centered vertically
 */

import "./App.css";

interface Roles {
  id: number;
  role: string;
}

interface User {
  id: number;
  name: string;
  roles?: Roles[];
}

const HeaderTable = ({ users }: { users: User[] }) => {
  const columns: string[] = users.reduce((acc: any, user: User) => Object.keys(user), []);

  return (
    <thead>
      <tr>
        {columns.map((column: string) => (
          <th key={column}>{column}</th>
        ))}
      </tr>
    </thead>
  );
};

const getRolesUser = (arrayRoles: Roles[]) => {
  const roles = arrayRoles.map((role) => role.role);
  return roles.toString();
};

const BodyTable = ({ users }: { users: User[] }) => {
  return (
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user?.roles && getRolesUser(user.roles)}</td>
        </tr>
      ))}
    </tbody>
  );
};

const App = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const res = await fetch("data.json");
    const data: User[] = await res.json();
    setUsers(data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex-container">
      <div className="item">
        <table>
          <HeaderTable users={users} />
          <BodyTable users={users} />
        </table>
      </div>
      <div className="item">
        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" />
      </div>
    </div>
  );
};

export default App;

/*

components
  User
  Table
    Header
    Body
  Avatar
  




*/
