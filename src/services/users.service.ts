import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/users.repositories";
import { hash } from "bcryptjs";

interface IUsers{
  username: string,
  email: string,
  password: string
}

class Users{
  async execute({ username, email, password }: IUsers){
    
    const usersRepository = getCustomRepository(UsersRepository);

    if(!email){
      return "Email Incorreto!";
    }
    const userAlreadyExists = await usersRepository.findOne({email});
    if(userAlreadyExists){
      return "ESTE EMAIL JÁ ESTÁ CADASTRADO!";
    }
    else
    {
      const passwordHash = await hash(password, 8);
      const createUser = usersRepository.create({username, email, password: passwordHash});
      await usersRepository.save(createUser);
      return createUser;
    }
  }
}

export { Users }