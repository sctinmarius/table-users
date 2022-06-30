import getRolesUser from "../../helpers/getRolesUser";
import { User } from "../../../shared/User.types";

const Body = ({ users }: { users: User[] }) => {
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

export default Body;
