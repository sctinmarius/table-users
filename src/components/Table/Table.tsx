import { User } from "../../shared/User.types";
import Body from "./Body";
import Header from "./Header";

const Table = ({ users }: { users: User[] }) => {
  return (
    <table>
      <Header users={users} />
      <Body users={users} />
    </table>
  );
};

export default Table;
