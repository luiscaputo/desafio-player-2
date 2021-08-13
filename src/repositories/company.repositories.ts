import { EntityRepository, Repository } from "typeorm";
import { Company } from "../entities/company.entities";

@EntityRepository(Company)
class CompanyRepositories extends Repository<Company>{}

export {CompanyRepositories};