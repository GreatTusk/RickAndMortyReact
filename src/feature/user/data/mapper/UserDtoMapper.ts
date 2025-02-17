import { User } from "../../domain/User";
import { UserDto } from "../dto/UserDto";

export function userDtoToUser(userDto: UserDto): User {
    return {
        name: userDto.name,
        company: userDto.company.name,
        email: userDto.email
    }
}