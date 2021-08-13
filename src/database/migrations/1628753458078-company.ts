import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class company1628753458078 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "company",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true
                    },
                    {
                        name: "name",
                        type: "varchar(250)"
                    },
                    {
                        name: "sector_id",
                        type: "int"
                    },
                    {
                        name: "industry_id",
                        type: "int"
                    },
                    {
                        name: "CNPJ",
                        type: "varchar(18)"
                    },
                    {
                        name: "CNAE",
                        type: "varchar(50)"
                    },
                    {
                        name: "titular_company",
                        type: "varchar(250)"
                    },
                    {
                        name: "created_at",
                        type: "datetime",
                        default: "current_timestamp"
                    },
                    {
                        name: "updated",
                        type: "datetime",
                        default: "current_timestamp"
                    },
                ]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
            })
        )}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("company")
    }

}
