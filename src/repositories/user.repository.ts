import { User, UserCreate, UserRepository } from "../interfaces/user.interfaces";


class UserRepositoryPrisma implements UserRepository{

   async create(data: UserCreate): Promise<User> {
        
    }

}

export {UserRepositoryPrisma}