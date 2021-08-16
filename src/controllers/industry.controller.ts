import {Request, Response } from "express"
import { Industry } from "../services/industry.service"

class IndustryController{
  async handleCreate(request: Request, response: Response){
      const industryService = new Industry();
      const { name, description } = request.body;
      const save = await industryService.execute({
        name, 
        description
      });
      if(save){
        return response.status(200).json({success: true, save});
      }else
        return response.status(400).json({success: false, message: "ERRO AO CADASTRAR!"});
  }
  async handleRemove(request: Request, response: Response){
    try{
      const industryService = new Industry();
      const { id } = request.params;
      const removeIndustry = industryService.remove({id});
      return response.status(200).json({success: true, message: "SEGMENTO REMOVIDO!"});
    }catch(e){
      return response.status(400).json({success: false, message: e});
    }
  }
}
export { IndustryController }