import { User } from "../../../shared/User.types";

const Header = ({ users }: { users: User[] }) => {
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

export default Header;
