import { getCustomRepository } from "typeorm"
import { IndustryRepositories } from "../repositories/insdustry.repositories";

interface IIndustry{
  name: string,
  description: string
}

class Industry{
  async execute({ name, description }: IIndustry) {
    const industryRepositorie = getCustomRepository(IndustryRepositories)
    
    const alreadExistsIndustry = await industryRepositorie.findOne({name})
    if(alreadExistsIndustry){
       throw new Error('Esse segmento já existe!')
    }
    else
    {
      const createIndustry = industryRepositorie.create({name, description});
      await industryRepositorie.save(createIndustry)
      return createIndustry;
    }
  }
  async remove(id){
    const industryRepositorie = getCustomRepository(IndustryRepositories);
    const ifExists = industryRepositorie.findOne({id});
    if(!ifExists){
      return "Esse Sector não existe";
    }
    else {
      const deleteIndustry = await industryRepositorie
        .createQueryBuilder()
        .delete()
        .where("id = :id", {id: id})
        .execute();
      return deleteIndustry;
    }
  }
}

export { Industry }