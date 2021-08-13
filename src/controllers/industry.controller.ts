import {Request, Response } from "express"
import { Industry } from "../services/industry.service"

class IndustryController{
  async handle(request: Request, response: Response){
      const industryService = new Industry();
      const { name, description } = request.body;
      const save = await industryService.handle({
        name, 
        description
      });
      if(save){
        return response.status(200).json({success: true, save});
      }else
        return response.status(400).json({success: false, message: "ERRO AO CADASTRAR"});
  }
}
export { IndustryController }