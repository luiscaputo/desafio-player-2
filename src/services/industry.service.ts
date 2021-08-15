import { getCustomRepository } from "typeorm"
import { IndustryRepositories } from "../repositories/insdustry.repositories";

interface IIndustry{
  name: string,
  description: string
}

class Industry{
  async handle({ name, description }: IIndustry) {
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
}

export { Industry }