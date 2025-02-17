import { User } from "../../domain/User";
import { UserDatasource } from "../../domain/UserDatasource";
import { UserDtos } from "../dto/UserDto";
import { userDtoToUser } from "../mapper/UserDtoMapper";

const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users';

export class JsonPlaceholderUserDatasource implements UserDatasource {
    async fetchUsers(): Promise<User[]> {
        const data = await fetch(USERS_API_URL);
        const userDto: UserDtos = await data.json();
        return userDto.map(userDtoToUser);
    }
}