import { UserCreate, UserRepository } from "../interfaces/user.interfaces";
import { UserRepositoryPrisma } from "../repositories/user.repository";

class UserUseCase {

    private userRepository: UserRepository

    constructor(){
        this.userRepository = new UserRepositoryPrisma()
    }

    async create({name,email}:UserCreate){

    }
}