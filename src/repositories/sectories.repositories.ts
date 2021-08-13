import { EntityRepository, Repository } from "typeorm";
import { Sectories } from "../entities/sectories.entities";

@EntityRepository(Sectories)
class SectorieRepositorie extends Repository<Sectories>{}

export { SectorieRepositorie };