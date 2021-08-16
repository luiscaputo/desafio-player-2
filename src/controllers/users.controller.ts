import { Request, Response } from "express";
import { Users } from "../services/users.service";

class UsersController{
  async handleCreate(request:Request, response: Response){
    try{
      const { username, email, password } = request.body;
      const createUser = new Users();
      const user = await createUser.execute({username, email, password});
      return response.status(200).json({success: true, data: user});
    }catch(e){
      return response.status(400).json({success: false, e});
    }
  }
}

export { UsersController }