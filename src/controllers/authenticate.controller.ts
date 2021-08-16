import {Request, Response} from "express"
import { Autenticate } from "../services/authenticate.service";

class AuthenticateUserController{
    async handle(request: Request, response: Response){
        const authenticateUserService = new Autenticate();

        const {email, password} = request.body;

        const token = await authenticateUserService.execute({email, password});

        return response.json(token);
    }
}

export { AuthenticateUserController };