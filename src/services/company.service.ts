import { getCustomRepository } from "typeorm"
import axios from "axios"
import { CompanyRepositories } from "../repositories/company.repositories";
import { IndustryRepositories } from "../repositories/insdustry.repositories";
import { SectorieRepositorie } from "../repositories/sectories.repositories";

interface ICompany{
  name: string,
  sector_id: number,
  industry_id: number
  CNPJ: string
  CNAE: string
  titular_company: string
}
interface IUCompany{
  id: number,
  name: string,
  sector_id: number,
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
                  }
                  else
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
                    }
                    else
                    {
                      return "CNPJ inexistente!"
                    }
                  }
              }
              else
              {
                return "O segmento passado não existe!";
              }
          }
          else
          {
            return "O sector Passado Não Existe!";
          }
      }
  }
  async remove( id ){
    const companyRepositories = getCustomRepository(CompanyRepositories);
    const ifExists = companyRepositories.findOne({id});
    if(!ifExists){
      return "Essa Empresa não está cadastrada!";
    }
    else {
      const deleteCompany = await companyRepositories
        .createQueryBuilder()
        .delete()
        .where("id = :id", {id: id})
        .execute();
      return deleteCompany;
    }
  }
  async show(){
      const companyRepositories = getCustomRepository(CompanyRepositories);
      const showAllCompanies = companyRepositories.find();
      return showAllCompanies;
  }
  async showById(id){
    const companyRepositories = getCustomRepository(CompanyRepositories);
    const showCompanyById = companyRepositories.findByIds(id);
    return showCompanyById;
  }
  async update({ id, name, sector_id, titular_company }: IUCompany){
    const companyRepositories = getCustomRepository(CompanyRepositories);
    const alreadyExistsId = await companyRepositories.findOne({id});
    
    if(!alreadyExistsId){
      return "Esse sector não existe!"
    }
    else 
    {
      const companyUpdate = companyRepositories
      .createQueryBuilder()
      .update()
      .set({
        name: name,
        sector_id: sector_id,
        titular_company: titular_company
      })
      .where("id = :id", {id:id})
      .execute();
      return companyUpdate;
    }
  }    
}
export { Company }