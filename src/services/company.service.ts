import { getCustomRepository } from "typeorm"
import axios from "axios"
import { CompanyRepositories } from "../repositories/company.repositories";
import { IndustryRepositories } from "../repositories/insdustry.repositories";
import { json, response } from "express";
import { SectorieRepositorie } from "../repositories/sectories.repositories";

interface ICompany{
  name: string,
  sector_id: number,
  industry_id: number
  CNPJ: string
  CNAE: string
  titular_company: string
}

class Company{
  async execute({ name, sector_id, industry_id, CNPJ, CNAE, titular_company }: ICompany) {
    const companyRepositories = getCustomRepository(CompanyRepositories);
    const sectorieRepositorie = getCustomRepository(SectorieRepositorie);
    const industryRepositorie = getCustomRepository(IndustryRepositories);

      const alreadExistsCompany = await companyRepositories.findOne({name});
      if(alreadExistsCompany){
        return 'Essa empresa já está registrada';
      } 
      else
        {
          const sectorieExists =  await sectorieRepositorie.findOne(sector_id);
          if(sectorieExists){
            const industryExists = await industryRepositorie.findOne(industry_id);
              if(industryExists){
                const alreadExistsCNPJ = await companyRepositories.findOne({CNPJ});
                  if(alreadExistsCNPJ){
                    return "Já Existe uma empresa com esse CNPJ";
                  }else
                  {
                    const getCNPJ = await axios.get(`https://brasilapi.com.br/api/cnpj/v1/${CNPJ}`);
                    if(getCNPJ.status === 200) {
                        const saveCompany = companyRepositories.create({
                          name,
                          sector_id,
                          industry_id,
                          CNPJ,
                          CNAE,
                          titular_company
                        });
                        await companyRepositories.save(saveCompany);
                      return getCNPJ.data;
                    }else
                    {
                      return "CNPJ inexistente!"
                    }
                  }
              }
              else{
                return "O segmento passado não existe!";
              }
          }
          else{
            return "O sector Passado Não Existe!";
          }
        }
  }    
}

export { Company }