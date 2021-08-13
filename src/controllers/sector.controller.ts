import {Request, Response } from "express"
import { Sectorie } from "../services/sectorie.service"

class SectorController{
  async handle(request: Request, response: Response){
      const sectorService = new Sectorie();
      const { name, description } = request.body;
      const save = await sectorService.execute({name, description});
      if(save){
        return response.status(200).json({success: true, save});
      }else
        return response.status(400).json({success: false, message: "ERRO AO CADASTRAR"});
  }
}
export { SectorController }