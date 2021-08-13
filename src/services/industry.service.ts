import { getCustomRepository } from "typeorm"
import { IndustryRepositories } from "../repositories/insdustry.repositories";

interface IIndustry{
  name: string,
  description: string
}

class Industry{
  async handle({ name, description }: IIndustry) {
    const sectorieRepositorie = getCustomRepository(IndustryRepositories)
    
    const alreadExistsIndustry = await sectorieRepositorie.findOne({name})
    if(alreadExistsIndustry){
       throw new Error('Esse sector já existe!')
    }
    else
    {
      const createIndustry = sectorieRepositorie.create({name, description});
      await sectorieRepositorie.save(createIndustry)
      return createIndustry;
    }
  }
}

export { Industry }