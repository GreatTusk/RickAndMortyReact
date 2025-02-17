import { User } from "./User";

export interface UserDatasource {
  fetchUsers(): Promise<User[]>;
}