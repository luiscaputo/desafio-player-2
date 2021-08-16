import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { UsersRepository } from "../repositories/users.repositories"
import { sign } from "jsonwebtoken";

interface IAutenticate{
  email: string,
  password: string
}
class Autenticate{
  async execute({email, password} : IAutenticate){
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({email});
    if(!user){
      return "Email/Password inválido";
    }
    const passwordMatch = await compare(password, user.password);
    if(!passwordMatch){
      return "Email/Password inválido";
    }

    const token = sign(
      {id: user.id, email: user.email},
      "desafioPlayer2Teste"
      // expiresIn: "1d"
    )
    return token;
  }
}

export { Autenticate };