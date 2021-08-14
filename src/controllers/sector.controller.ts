import {Request, Response } from "express"
import { Sectorie } from "../services/sectorie.service"

class SectorController{
  async handle(request: Request, response: Response){
      try{
        const sectorService = new Sectorie();
        const { name, description } = request.body;
        const save = await sectorService.execute({name, description});        
        return response.status(200).json({success: true, save});

      }catch(e){
        return response.status(400).json({success: false, message: e});
      }
  }
}
export { SectorController }