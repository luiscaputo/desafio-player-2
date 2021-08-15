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
}
export { CompanyController }