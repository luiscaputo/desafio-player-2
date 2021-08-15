import {Request, Response } from "express"
import { Sectorie } from "../services/sectorie.service"

class SectorController{
  async handleCreate(request: Request, response: Response){
      try{
        const sectorService = new Sectorie();
        const { name, description } = request.body;
        const save = await sectorService.execute({name, description});        
        return response.status(200).json({success: true, save});
      }catch(e){
        return response.status(400).json({success: false, message: e});
      }
  }
  async handleRemove(request: Request, response: Response){
    try{
      const sectorieService = new Sectorie();
      const { id } = request.params
      const removeSectorie = sectorieService.remove(id);
      return response.status(200).json({success: true, message: "Sector Removido", removeSectorie});
    }catch(e){
      return response.status(400).json({success: false, message: e});
    }
  }
  async handleShow(request: Request, response: Response){
    try{
      const sectorieService = new Sectorie();
      const show = await sectorieService.show()
      return response.status(200).json({success: true, message: show});
    }catch(e){
      response.status(400).json({success: false, message: e});
    }
  }
  async handleShowById(request: Request, response: Response){
    try{
      const { id } = request.params
      const sectorieService = new Sectorie();
      const showById = await sectorieService.showById(id)
      return response.status(200).json({success: true, message: showById})
    }catch(e){
      return response.status(400).json({success: false, message: e});
    }
  }
  async handleUpdate(request: Request, response: Response){
    try{
      const { id, name, description } = request.body;
      const sectorieService = new Sectorie();
      const updateSectorie = await sectorieService.update({id, name, description});
      return response.status(200).json({success: true, message: "Sector Actualizado"});
    }catch(e){
      return response.status(400).json({success: false, message: e});
    }
  }
}
export { SectorController }