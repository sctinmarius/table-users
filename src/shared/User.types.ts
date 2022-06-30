import { Roles } from "./Roles.types";

export interface User {
  id: number;
  name: string;
  roles?: Roles[];
}
