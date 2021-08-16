import { Request, Response } from "express";
import { Company } from "../services/company.service";

class CompanyController {
  async handleCreate(request: Request, response: Response){
    try{
      const { name, sector_id, industry_id, CNPJ, CNAE, titular_company } = request.body;
      const companyService = new Company();
      const createCompany = await companyService.execute({ name, sector_id, industry_id, CNPJ, CNAE, titular_company });
      return response.status(200).json({success: true, message: "Empresa Cadastrada", CNPJ: createCompany});
    }catch(e){
      return response.status(400).json({success: false, message: e});
    }
  }
  async handleRemove(request: Request, response: Response){
    try{
      const companyService = new Company();
      const { id } = request.params
      const removeCompany = companyService.remove(id);
      return response.status(200).json({success: true, message: "Empresa Removida", removeCompany});
    }catch(e){
      return response.status(400).json({success: false, message: e});
    }
  }
  async handleShow(request: Request, response: Response){
    try{
      const companyService = new Company();
      const show = await companyService.show()
      return response.status(200).json({success: true, message: show});
    }catch(e){
      response.status(400).json({success: false, message: e});
    }
  }
  async handleShowById(request: Request, response: Response){
    try{
      const { id } = request.params
      const companyService = new Company();
      const showById = await companyService.showById(id)
      return response.status(200).json({success: true, message: showById})
    }catch(e){
      return response.status(400).json({success: false, message: e});
    }
  }
  async handleUpdate(request: Request, response: Response){
    try{
      const { id, name, sector_id, titular_company } = request.body;
      const companyService = new Company();
      const updateCompany = await companyService.update({id, name, sector_id, titular_company});
      return response.status(200).json({success: true, message: "Dados da Empresa Atualizado!", data: updateCompany});
    }catch(e){
      return response.status(400).json({success: false, message: e});
    }
  }
}
export { CompanyController }