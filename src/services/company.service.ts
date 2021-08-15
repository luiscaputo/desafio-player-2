import { getCustomRepository } from "typeorm"
import axios from "axios"
import { CompanyRepositories } from "../repositories/company.repositories";
import { IndustryRepositories } from "../repositories/insdustry.repositories";
import { response } from "express";

interface ICompany{
  name: string,
  sector_id: number,
  industry_id: number
  CNPJ: string
  CNAE: string
  titular_company: string
}

class Company{
  async handle({ name, sector_id, industry_id, CNPJ, CNAE, titular_company }: ICompany) {
    const companyRepositories = getCustomRepository(CompanyRepositories);
    const alreadExistsCompany = await companyRepositories.findOne({name});
    if(alreadExistsCompany){
      throw new Error('Essa empresa já está registrada')
    } else
      {
        const getCNPJ = await axios.get(`https://brasilapi.com.br/api/cnpj/v1/${CNPJ}`);
        if(getCNPJ.status === 200 && getCNPJ.data.length > 0) {
          const saveCompany = await companyRepositories.save({
            name,
            sector_id,
            industry_id,
            CNPJ,
            CNAE,
            titular_company
          });
          return saveCompany
          //return getCNPJ
        }else
        {
          throw new Error("CNPJ inexistente!")
        }
      }
  }    
}

export { Company }