import { getCustomRepository } from "typeorm"
import { SectorieRepositorie} from "../repositories/sectories.repositories"

interface ISectories{
  name: string,
  description: string
}
class Sectorie{
  async execute({ name, description }: ISectories) {
    const sectorieRepositories = getCustomRepository(SectorieRepositorie)
    try{
      const alreadExistsSectorie = await sectorieRepositories.findOne({name})
      if(alreadExistsSectorie){
        return "Esse sector já existe"
      }
      // const createSectorie = sectorieRepositories.create({name, description});
      const createSectorie = await sectorieRepositories.save({
        name,
        description
      });
      return createSectorie;
    }catch(e){
       throw new Error(e.message)
    }
  }
}
export { Sectorie }