import { getCustomRepository } from "typeorm"
import { Sectories } from "../entities/sectories.entities";
import { SectorieRepositorie} from "../repositories/sectories.repositories"

interface ISectories {
  name: string,
  description: string
}
interface IUSectorie{
  id: number,
  name: string,
  description: string
}

class Sectorie{
  async execute({ name, description }: ISectories) {
    const sectorieRepositories = getCustomRepository(SectorieRepositorie)
      try{
        const alreadExistsSectorie = await sectorieRepositories.findOne({name})
        if(alreadExistsSectorie){
          return 'Esse Sector já existe';
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
  async remove( id ){
    const sectorieRepositories = getCustomRepository(SectorieRepositorie);
    const ifExists = sectorieRepositories.findOne({id});
    if(!ifExists){
      return "Esse Sector não existe";
    }
    else {
      const deleteSectorie = await sectorieRepositories
        .createQueryBuilder()
        .delete()
        .where("id = :id", {id: id})
        .execute();
      return deleteSectorie;
    }
  }
  async show(){
      const sectorieRepositories = getCustomRepository(SectorieRepositorie);
      const showAllSectories = sectorieRepositories.find();
      return showAllSectories;
  }
  async showById(id){
    const sectorieRepositories = getCustomRepository(SectorieRepositorie);
    const showSectorieById = sectorieRepositories.findByIds(id);
    return showSectorieById;
  }
  async update({ id, name, description }: IUSectorie){
    const sectorieRepositories = getCustomRepository(SectorieRepositorie);
    const alreadyExistsId = await sectorieRepositories.findOne({id});
    
    if(!alreadyExistsId){
      return "Esse sector não existe!"
    }else 
    {
      const sectorieUpdate = sectorieRepositories
      .createQueryBuilder()
      .update()
      .set({
        name: name,
        description: description
      })
      .where("id = :id", {id:id})
      .execute();
      return sectorieUpdate;
    }
  }
}
export { Sectorie }