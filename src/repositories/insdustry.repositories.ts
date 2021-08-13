import { EntityRepository, Repository } from "typeorm";
import { Industry } from "../entities/industry.entities";

@EntityRepository(Industry)
class IndustryRepositories extends Repository<Industry>{}

export { IndustryRepositories };