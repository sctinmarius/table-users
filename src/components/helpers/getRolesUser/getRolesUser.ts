import { Roles } from "../../../shared/Roles.types";

const getRolesUser = (arrayRoles: Roles[]) => {
  const roles = arrayRoles.map((role) => role.role);
  return roles.toString();
};

export default getRolesUser;
