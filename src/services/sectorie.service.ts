import { getCustomRepository } from "typeorm"
import { SectorieRepositorie} from "../repositories/sectories.repositories"

interface ISectories {
  name: string,
  description: string
}
class Sectorie{
  async execute({ name, description }: ISectories) {
    const sectorieRepositories = getCustomRepository(SectorieRepositorie)
      try{
        const alreadExistsSectorie = await sectorieRepositories.findOne({name})
        if(alreadExistsSectorie){
          return false;
        }else
        {
          const createSectorie = sectorieRepositories.create({
            name, 
            description
          });
          await sectorieRepositories.save(createSectorie)
          return createSectorie;
        }
      }catch(e){
        return e
      }
      // const createSectorie = sectorieRepositories.create({name, description});
  }
}
export { Sectorie }